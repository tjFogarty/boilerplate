/* globals require */
/* jshint node:true */

'use strict';

modules.export = {
  isModernBrowser: 'visibilityState' in document
};
