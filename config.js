/* jshint node:true */

'use strict';

/**
 * Config file for Gulp tasks
 */

var config = {
  // Used for BrowserSync
  local_url: 'ww-etb.dev',

  // Assets
  bower_file: 'bower.json',

  ee_watch: 'admin/templates/default_site/**/*.html', // ExpressionEngine files

  js_entry_file: './assets/scripts/main.js', // why is the dot there? I don't know, but it works
  js_dir: 'assets/scripts/',
  js_watch: 'assets/scripts/**/*.js',

  scss_entry_file: 'assets/scss/main.scss',
  scss_watch: 'assets/scss/**/*.scss',
  css_dir: 'assets/css'
};

module.exports = config;