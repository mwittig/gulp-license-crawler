# gulp-license-crawler

[![Greenkeeper badge](https://badges.greenkeeper.io/mwittig/gulp-license-crawler.svg)](https://greenkeeper.io/)

[![Npm Version](https://badge.fury.io/js/gulp-license-crawler.svg)](http://badge.fury.io/js/gulp-license-crawler)
[![Build Status](https://travis-ci.org/mwittig/gulp-license-crawler.svg?branch=master)](https://travis-ci.org/mwittig/gulp-license-crawler)
[![Dependency Status](https://david-dm.org/mwittig/gulp-license-crawler.svg)](https://david-dm.org/mwittig/gulp-license-crawler)



<table>
<tr>
<td>Description</td>
<td>Analyzes license information for multiple node.js modules (package.json files) as
 part of your software project.</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 4.0</td>
</tr>
</table>

## Usage

    var licenseCrawler = require('gulp-license-crawler');
    
    gulp.task('licenses', function() {
        return licenseCrawler()
            .pipe(gulp.dest('./licenses'))
    });


## Options

### options.start
Type: `Array<String>`
Default value: [ `.` ]

Path to the directory the license search should start from. Multiple paths can be specified.

### options.exclude

Type: `Array<String>`
Default Value: `undefined`

Path to a directory to be excluded (and its subdirectories) from the search. Multiple paths can be specified.

### options.unknown
Type: `Boolean`
Default value: `false`

Only generate a list of licenses that can't be determined or have been guessed.

### options.dependencies
Type: `Boolean`
Default value: `false`

Only generate a list of third-party licenses, i.e., only list the dependencies defined in package.json.

### options.json
Type: `String`
Default Value: `undefined`

Export data as JSON to the given file path. Be cautious, the task will overwrite file if exists!

### options.csv
Type: `String`
Default Value: `undefined`

Export data as CSV to the given file path. Be cautious, the task will overwrite file if exists!

## History

See [Release History](https://github.com/mwittig/gulp-license-crawler/blob/master/HISTORY.md).

## License 

Copyright (c) 2016-2017, Marcus Wittig
All rights reserved.

[BSD-3-Clause License](https://github.com/mwittig/gulp-license-crawler/blob/master/LICENSE)
 

