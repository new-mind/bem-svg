'use strict'

exports.API_VER = 2;

exports.techMixin = {
    getBuildResultChunk: function () {
    },

    getBuildSuffixesMap: function () {
        return {
            "svg.js": ["svg", "svg.js"]
        }
    }
}
