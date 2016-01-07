/*
 * gulp-license-crawler
 * https://github.com/mwittig/gulp-license-crawler
 *
 * Copyright (c) 2016 Marcus Wittig
 * Licensed under the BSD 3-clause license.
 */
var gutil = require('gulp-util');
var _     = require('lodash');
var File = gutil.File;
var path = require('path');
var crawler = require('npm-license-crawler');
var Stream = require('stream');
var PluginError = gutil.PluginError;
var PLUGIN_NAME = 'gulp-license-crawler';

function licenseCrawler(options) {
    var outputStream = new Stream();
    var defaults = {
            start: ['.'],
            gulp: true
        };

    options = _.extend(defaults, options || {});
    crawler.dumpLicenses(options,
        function (error, result) {
            if (error) {
                throw new gutil.PluginError(PLUGIN_NAME, error, {showStack: true});
            }
            else {
                var file = new File({
                    path: path.join(process.cwd(), "licenses.txt"),
                    contents: new Buffer(result)
                });
                outputStream.emit('data', file);
                outputStream.emit('finish');
            }
        }
    );
    return outputStream;
}
module.exports = licenseCrawler;