'use strict';

import {Greetings} from './modules/greetings';

;(function($) {

  $(document).ready(function () {

    Greetings.to('developer');

  });

}(jQuery));
