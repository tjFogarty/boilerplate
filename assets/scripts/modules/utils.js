/* globals require */
/* jshint node:true */

'use strict';

module.export = {
  isModernBrowser: 'visibilityState' in document
};
