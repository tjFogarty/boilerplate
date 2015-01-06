/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var pixrem = require('gulp-pixrem');
var bless = require('gulp-bless');
var size = require('gulp-size');

gulp.task('css-ie', ['styles'], function () {
  gulp.src('assets/css/main.css')
    .pipe(autoprefixer({
      browsers: ['Explorer <= 9']
    }))
    .pipe(pixrem())
    .pipe(bless())
    .pipe(gulp.dest('assets/css/ie'))
    .pipe(size())
    .pipe(notify('CSS IE Finished.'));
});