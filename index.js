var transformTools = require('browserify-transform-tools');
var resolve = require('resolve');
var path = require('path')

var transform = transformTools.makeRequireTransform(
    "resolvify",
    {
        evaluateArguments: true,
        jsFilesOnly: true
    },
    function(args, opts, cb) {
        var paths = Object.keys(opts.config)
                        .filter(function(opts_key) { return opts_key.length == 1 })
                        .reduce(function(coll, opts_key) { 
                            return coll.concat(opts.config[opts_key])
                        },[])
        if (paths.length == 0) { return cb(null) }
        resolved = resolve.sync(args[0], {
            basedir: path.dirname(opts.file),
            moduleDirectory: ['node_modules'].concat(paths)
        });

        return cb(null, "require('"+resolved+"')");
    }
);

module.exports = transform;
