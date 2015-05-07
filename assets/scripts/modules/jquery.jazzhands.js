/* globals $, jQuery */
/* jshint node:true */

/**
 * JazzHands plugin
 * Uses GSAP for the animations
 * Matches element from data-jh-id by default
 *
 * @example
 *  <a class="js-jazzhands-toggle" data-jh-id="test">Click me</a>
 *  ...
 *  <div id="another">...</div>
 */
(function ($) {
  'use strict';

  var JazzHands = window.JazzHands || {};

  JazzHands = (function() {
    function JazzHands(element, settings) {
      var _ = this;

      _.defaults = {
        dataIdSelector: 'data-jh-id',
        activeClass: 'is-open',
        animationDuration: 0.3
      };

      _.trigger = element;

      _.dropdownId = element.getAttribute(_.defaults.dataIdSelector);

      _.dropdownEl = document.getElementById(_.dropdownId);

      _.contentHeight = _.getHeight();

      _.hide();

      $(_.trigger).on('click', function(e) {
        e.preventDefault();

        _.toggle();
      });
    }

    return JazzHands;
  })();

  JazzHands.prototype.toggle = function() {
    var _ = this;

    _.dropdownEl.classList.toggle(_.defaults.activeClass);

    if (_.isVisible)) {
      _.show();
    } else {
      _.hide();
    }

    return this;
  };

  JazzHands.prototype.isVisible = function() {
    var _ = this;

    return _dropdownEl.classList.contains(_.defaults.activeClass);
  };

  JazzHands.prototype.hide = function() {
    var _ = this;

    TweenLite.to(_.dropdownEl, _.defaults.animationDuration, {
      autoAlpha: 0,
      onComplete: function() {
        TweenLite.to(_.dropdownEl, _.defaults.animationDuration, {
          display: 'none',
          height: 0
        });
      }
    });

    return this;
  };

  JazzHands.prototype.show = function() {
    var _ = this;

    TweenLite.to(_.dropdownEl, _.defaults.animationDuration, {
      display: 'block',
      height: _.contentHeight,
      onComplete: function() {
        TweenLite.to(_.dropdownEl, _.defaults.animationDuration, {autoAlpha: 1});
      }
    });

    return this;
  };

  JazzHands.prototype.getHeight = function() {
    var _ = this;

    return _.dropdownEl.getBoundingClientRect().height + 'px';
  };

  $.fn.jazzHands = function (options) {
    var _ = this,
       opt = arguments[0],
       args = Array.prototype.slice.call(arguments, 1),
       l = _.length,
       i = 0,
       ret;

   for (i; i < l; i++) {
     if (typeof opt == 'object' || typeof opt == 'undefined') {
       _[i].jazzhands = new JazzHands(_[i], opt);
     } else {
       ret = _[i].jazzhands[opt].apply(_[i].jazzhands, args);
     }

     if (typeof ret != 'undefined') return ret;
   }

   return _;
  };
})(jQuery);
