MAKE.decl('Arch', {
    blocksLevelsRegexp : /^.+?\.blocks/,
    bundlesLevelsRegexp : /^.+?\.bundles$/
});

MAKE.decl('BundleNode', {

    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'svg.js'
        ]
    }
});

