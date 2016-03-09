'use strict';
/*
 * gulp-license-crawler
 * https://github.com/mwittig/gulp-license-crawler
 *
 * Copyright (c) 2016 Marcus Wittig
 * Licensed under the BSD 3-clause license.
 */
var gulpUtil = require('gulp-util');
var assign = require('lodash.assign');
var File = gulpUtil.File;
var path = require('path');
var crawler = require('npm-license-crawler');
var Stream = require('stream');
var PLUGIN_NAME = 'gulp-license-crawler';

function licenseCrawler(options) {
    var outputStream = new Stream();
    var defaults = {
            start: ['.'],
            gulp: true
        };

    options = assign(defaults, options || {});
    crawler.dumpLicenses(options,
        function (error, result) {
            if (error) {
                throw new gulpUtil.PluginError(PLUGIN_NAME, error, {showStack: true});
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