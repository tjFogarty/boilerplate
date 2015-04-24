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
  js_dir: 'assets/scripts/', // where your scripts are located
  js_watch: ['assets/scripts/modules/*.js', 'assets/scripts/main.js'], // what files to watch to trigger the scripts task
  js_es6: false, // set to 'true' if you want to use ES6 features

  scss_entry_file: 'assets/scss/main.scss',
  scss_watch: 'assets/scss/**/*.scss', // what files to watch to trigger the styles task
  css_dir: 'assets/css',
  css_entry_file: 'assets/css/main.css',
  critical_css: 'critical.php', // will contain critical css that you can include

  wiredep_file: './index.php', // looks through given file(s) for bower comments
  wiredep_dest: './' // where to spit out the wiredep'd file(s)

};

module.exports = config;
