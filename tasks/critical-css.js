/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var penthouse = require('penthouse');
var cleanCSS = require('clean-css');
var fs = require('fs');
var config = require('../config');

gulp.task('critical-css', ['styles'], function () {
  penthouse({
    url: ['http://' + config.local_url],
    css: config.css_entry_file,
    width: 480,
    height: 800
  }, function (err, critical) {
    var clean = new cleanCSS().minify(critical);
    fs.writeFile(config.critical_css, '<style>' + clean + '</style>');
  });
});