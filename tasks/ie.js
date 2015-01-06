/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var pixrem = require('gulp-pixrem');
var bless = require('gulp-bless');
var size = require('gulp-size');
var config = require('../config');

gulp.task('css-ie', ['styles'], function () {
  gulp.src(config.css_entry_file)
    .pipe(autoprefixer({
      browsers: ['Explorer <= 9']
    }))
    .pipe(pixrem())
    .pipe(bless())
    .pipe(gulp.dest(config.css_dir + '/ie'))
    .pipe(size())
    .pipe(notify('CSS IE Finished.'));
});