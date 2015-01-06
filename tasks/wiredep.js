/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var config = require('../config');
var wiredep = require('wiredep').stream;  

gulp.task('wiredep', function () {
  gulp.src(config.wiredep_file)
    .pipe(wiredep({
      directory: 'assets/lib',
      ignorePath: '',
      exclude: ['foundation', 'modernizr']
    })).pipe(gulp.dest(config.wiredep_dest));
});