/* jshint node:true */

'use strict';

/**
 * Config file for Gulp tasks
 */

var config = {
  // Used for BrowserSync
  local_url: 'boilerplate.dev',

  // Assets
  bower_file: 'bower.json',

  workfiles_watch: '**/*.php', // ExpressionEngine files

  js_entry_file: './assets/scripts/main.js', // why is the dot there? I don't know, but it works
  js_dir: 'assets/scripts/',
  js_watch: 'assets/scripts/**/*.js',

  scss_entry_file: 'assets/scss/main.scss',
  scss_watch: 'assets/scss/**/*.scss',
  css_dir: 'assets/css',
  css_entry_file: 'assets/css/main.css',
  critical_css: 'critical.php',

  wiredep_file: './index.php',
  wiredep_dest: './'

};

module.exports = config;