'use strict';
/*
 * gulp-license-crawler
 * https://github.com/mwittig/gulp-license-crawler
 *
 * Copyright (c) 2016 Marcus Wittig
 * Licensed under the BSD 3-clause license.
 */
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var licenseCrawler = require('./');

gulp.task('test', function () {
    return gulp.src('test/test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('licenses', function() {
    return licenseCrawler()
        .pipe(gulp.dest('./licenses'))
});

// default task
gulp.task('default', ['licenses']);