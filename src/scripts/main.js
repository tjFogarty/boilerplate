import { Foundation } from 'foundation-sites';

/**
 * We're using Webpack, which doesn't like libs that don't export as a module
 * Until more devs get on board, whatever isn't supported is compiled into a vendors file
 * See webpack.config.js to see how this is done
 */
(function($) {
  // When the DOM is ready, we can start up any plugins or custom scripts
  $(document).ready(function() {
    // Pretty much everything you code goes in here
    $(document).foundation();
  });
}(jQuery));
