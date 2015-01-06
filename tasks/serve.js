/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('serve', ['styles', 'scripts'], function () {
  browserSync({
    proxy: config.local_url,
    online: true,
    xip: true
  });
});
