/*jshint node:true*/

'use strict';

var gulp = require('gulp');

gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;
  gulp.src('admin/templates/default_site/layouts.group/*.html')
    .pipe(wiredep({
      directory: 'assets/lib',
      ignorePath: '../../../..',
      exclude: ['foundation', 'modernizr']
    })).pipe(gulp.dest('admin/templates/default_site/layouts.group/'));
});