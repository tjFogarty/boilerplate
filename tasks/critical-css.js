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
    css: 'assets/css/main.css',
    width: 480,
    height: 800
  }, function (err, critical) {
    var clean = new cleanCSS().minify(critical);
    fs.writeFile('admin/templates/default_site/layouts.group/critical.html', '<style>' + clean + '</style>');
  });
});