/*jshint node:true*/

'use strict';

var gulp = require('gulp');

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  gulp.src('index.php')
    .pipe(wiredep({
      directory: 'assets/lib',
      ignorePath: '',
      exclude: ['foundation', 'modernizr']
    })).pipe(gulp.dest('index.php'));
});