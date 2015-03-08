/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var config = require('../config');

gulp.task('scripts', function () {
  if (config.js_es6) {
    return browserify({debug: true})
      .transform(babelify)
      .add(config.js_entry_file)
      .bundle()
      .on('error', function (err) {
        console.log(err.message);

        this.emit('end');
      })
      .pipe(source('main.bundle.js'))
      .pipe(gulp.dest(config.js_dir))
      .pipe(reload({stream:true}))
      .pipe(notify('JS compilation complete.'));
  }

  return browserify({debug: true})
    .add(config.js_entry_file)
    .bundle()
    .on('error', function (err) {
      console.log(err.message);

      this.emit('end');
    })
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest(config.js_dir))
    .pipe(reload({stream:true}))
    .pipe(notify('JS compilation complete.'));
});