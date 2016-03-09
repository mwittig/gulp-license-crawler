'use strict';
/*
 * gulp-license-crawler
 * https://github.com/mwittig/gulp-license-crawler
 *
 * Copyright (c) 2016 Marcus Wittig
 * Licensed under the BSD 3-clause license.
 */
var gulp = require('gulp');
var licenseCrawler = require('./');

gulp.task('licenses', function() {
    return licenseCrawler()
        .pipe(gulp.dest('./licenses'))
});

// default task
gulp.task('default', ['licenses']);