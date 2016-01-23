/* jshint node:true */

'use strict';

/**
 * Config file for Gulp tasks
 */

var config = {
  // Used for BrowserSync
  local_url: 'your-url.dev',

  workfiles_watch: ['**/*.php', '**/*.twig'],

  js_entry_file: __dirname + '/src/scripts/main.js', // main script file
  js_dir: __dirname + '/assets/scripts/', // where your scripts are located
  js_watch: ['src/scripts/modules/**/*.js', 'src/scripts/main.js'], // what files to watch to trigger the scripts task
  js_esnext: true, // take advantage of ES2015+ features

  scss_entry_file: __dirname + '/src/scss/main.scss',
  scss_fallback_file: __dirname + '/src/scss/fallbacks.scss',
  scss_watch: 'src/scss/**/*.scss', // what files to watch to trigger the styles task
  css_dir: __dirname + '/assets/css',
  css_entry_file: __dirname + '/assets/css/main.css',
};

module.exports = config;
