'use strict'
var FS = require('fs');
var PATH = require('path');
var Q = require('q');
var SNAP_PATH = require.resolve('snapsvg');

exports.API_VER = 2;

exports.techMixin = {
    getBuildResult: function (decl, levels, output, opts) {
        return Q.all([
            this.getSnapChunk(output),
            this.__base.apply(this, arguments)
        ])
        .spread(function (snap, res) {
            return [snap].concat(res);
        });
    },

    getBuildResultChunk: function (relPath, path) {
        return [
            '/* ' + relPath + ': begin */ /**/',
            FS.readFileSync(path) + ';',
            '/* ' + relPath + ': end */ /**/',
            '\n'].join('\n');
    },

    getBuildSuffixesMap: function () {
        return {
            "svg.js": ["svg", "svg.js"]
        }
    },

    getDependencies: function () {
        return ['deps.js']
    },

    getSnapChunk: function (output) {
        var relPath = PATH.relative(output, SNAP_PATH);
        return this.getBuildResultChunk(relPath, SNAP_PATH);
    }
}
