/* jshint node:true */

'use strict';

/**
 * Config file for Gulp tasks
 */

var config = {
  // Used for BrowserSync
  local_url: 'boilerplate.dev',

  workfiles_watch: __dirname + '//**/*.php',

  js_entry_file: __dirname + '/assets/scripts/main.js', // main script file
  js_dir: __dirname + '/assets/scripts/', // where your scripts are located
  js_watch: [__dirname + '/assets/scripts/modules/**/*.js', __dirname + '/assets/scripts/main.js'], // what files to watch to trigger the scripts task
  js_esnext: true, // take advantage of ES2015+ features

  scss_entry_file: __dirname + '/assets/scss/main.scss',
  scss_watch: __dirname + '/assets/scss/**/*.scss', // what files to watch to trigger the styles task
  css_dir: __dirname + '/assets/css',
  css_entry_file: __dirname + '/assets/css/main.css',
  critical_css: __dirname + '/critical.php', // will contain critical css that you can include
};

module.exports = config;
