/* globals require */
/* jshint node:true */

'use strict';

$(document).ready(function () {
  // `require` your modules here
  require('./modules/hello');
  require('./modules/foundation');
  require('./modules/em.dropdown');

  $('.js-dropdown-toggle').emDropdown();
});
