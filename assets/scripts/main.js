/* globals require */
/* jshint node:true */

'use strict';

var utils = require('./modules/utils');

$(document).ready(function () {
  // `require` your modules here
  if (utils.isModernBrowser) {
    require('./modules/hello');
    require('./modules/foundation');
  }
});
