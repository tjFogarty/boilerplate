// set jQuery as a global in Browserify
// this lets other required plugins access it
// now in other files we can call var/let/const $ = global.jQuery;
global.jQuery = require('jquery');

// ES2015 example
import {Greetings} from './modules/greetings';

// Grab what you need from Foundation
// Note: If you get errors in the console, check them out and see if there are dependencies - e.g. foundation.core requires foundation.util.mediaQuery
require('../../node_modules/foundation-sites/js/foundation.core');
require('../../node_modules/foundation-sites/js/foundation.tabs');
require('../../node_modules/foundation-sites/js/foundation.util.mediaQuery');
require('../../node_modules/foundation-sites/js/foundation.util.keyboard');

// Ready to go!
// This is a self-invoking anonymous function
// Helps stop spilling out into global namespace
(function($) {
  // When the DOM is ready, we can start up any plugins or custom scripts
  $(document).ready(function () {
    Greetings.to('developer');
    $(document).foundation();
  });
}(jQuery));
