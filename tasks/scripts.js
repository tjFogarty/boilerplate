/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var gutil = require('gulp-util');
var watchify = require('watchify');
var babelify = require('babelify');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var assign = require('lodash.assign');
var config = require('../config');

var customOpts = {
  entries: config.js_entry_file,
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// add transformations here

if (config.js_esnext) {
  b.transform(babelify, {presets: ['es2015']});
}

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('main.bundle.js'))
    .pipe(gulp.dest(config.js_dir))
    .pipe(reload({stream:true}))
    .pipe(notify('JS compilation complete.'));
}

gulp.task('scripts', bundle);
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal
