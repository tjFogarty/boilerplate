/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = require('../config');

gulp.task('watch', ['serve'], function () {
    // watch for changes
    gulp.watch([config.ee_watch], reload);
    gulp.watch(config.scss_watch, ['styles']);
    gulp.watch(config.js_watch, ['scripts']);
    gulp.watch(config.bower_file, ['wiredep']);
});