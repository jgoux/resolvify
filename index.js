var transformTools = require('browserify-transform-tools');
var resolve = require('resolve');
var path = require('path');

var transform = transformTools.makeRequireTransform(
    "resolvify",
    {
        evaluateArguments: true,
        jsFilesOnly: true
    },
    function(args, opts, cb) {
        resolved = resolve.sync(args[0], {
            basedir: path.dirname(opts.file),
            moduleDirectory: ['node_modules'].concat(opts.config)
        });

        return cb(null, "require('"+resolved+"')");
    }
);

module.exports = transform;