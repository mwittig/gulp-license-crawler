/*jshint expr:true */

/**
 * Tests for gulp-license-crawler
 *
 * Copyright (c) Ian Kelly
 * Licenced under The MIT License
 */

var licenseCrawler = require('../');
var should = require('should');
var Stream = require('stream');
require('mocha');


describe('gulp-license-crawler', function() {

    it('should return am object with licenses in a stream', function (done) {
        // finding licenses can take some time
        this.timeout(20000);

        var stream = licenseCrawler();
        var dataSent = false;

        stream.on('data', function (chunk) {
            dataSent = true;
            chunk.should.be.an.Object;
        });

        stream.on('finish', function () {
            dataSent.should.be.true;
            done();
        });

        stream.on('error', function (err) {
            done(err);
        });

        stream.should.be.an.object;
        stream.should.be.an.instanceOf(Stream);
    });
});