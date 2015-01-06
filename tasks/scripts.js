/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var config = require('../config');

gulp.task('scripts', function () {
  return browserify(config.js_entry_file)
    .bundle()
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest(config.js_dir))
    .pipe(reload({stream:true}))
    .pipe(notify('JS compilation complete.'));
});