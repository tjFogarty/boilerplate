// set jQuery as a global in Browserify
// this lets other required plugins access it
global.jQuery = require('jquery');

// Check out this file for configuring what you want from Foundation
require('./modules/foundation');

// Ready to go!
// This is a self-invoking anonymous function
// Helps stop spilling out into global namespace
// Alias $ to jQuery
(function($) {
  // When the DOM is ready, we can start up any plugins or custom scripts
  $(document).ready(function () {
    // Pretty much everything you code goes in here
    $(document).foundation();
  });
}(jQuery));
