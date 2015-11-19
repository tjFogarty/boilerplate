global.jQuery = require('jquery'); // set jQuery as a global in Browserify

// ES2015 example
import {Greetings} from './modules/greetings';

// Grab what you need from Foundation
require('../../node_modules/foundation-sites/dist/foundation');
// require('../../node_modules/foundation-sites/js/foundation.core');
// require('../../node_modules/foundation-sites/js/foundation.tabs');
// require('../../node_modules/foundation-sites/js/foundation.reveal');
// require('../../node_modules/foundation-sites/js/foundation.toggler');
// require('../../node_modules/foundation-sites/js/foundation.accordion');
// require('../../node_modules/foundation-sites/js/foundation.equalizer');
// require('../../node_modules/foundation-sites/js/foundation.util.mediaQuery');

// Ready to go!
;(function($) {

  $(document).ready(function () {

    Greetings.to('developer');
    $(document).foundation();

  });

}(jQuery));
