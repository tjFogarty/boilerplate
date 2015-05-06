/* globals $, jQuery */
/* jshint node:true */

/**
 * Dropdown plugin
 * Uses GSAP for the animations
 * Matches element from data-em-dropdown-id by default
 *
 * @example
 *  <a class="js-dropdown-toggle" data-em-dropdown-id="test">Click me</a>
 *  ...
 *  <div id="another">...</div>
 */
(function ($) {
  'use strict';

  /**
   * Settings
   */
  $.fn.emDropdown = function (options) {
    var settings = $.extend({
      activeClass: 'is-open',
      dataIdSelector: 'data-em-dropdown-id',
      dataHeightAttr: 'data-em-dropdown-height',
      animationDuration: 0.3
    }, options);

    var allDropdowns = [];

    var activeDropdown = '';

    /**
     * Toggle Dropdown
     * Checks if it has the activeClass and shows/hides accordingly
     */
    function toggleDropdown() {
      var dropdownId = this.getAttribute(settings.dataIdSelector),
          dropdownEl = document.getElementById(dropdownId);

      dropdownEl.classList.toggle(settings.activeClass);

      if (dropdownEl.classList.contains(settings.activeClass)) {
        hideOthers();
        show(dropdownEl);
      } else {
        hide(dropdownEl);
      }
    }

    /**
     * Set opacity to 0, then once done hide element
     */
    function hide(dropdownEl) {
      TweenLite.to(dropdownEl, settings.animationDuration, {
        autoAlpha: 0,
        onComplete: function() {
          TweenLite.to(dropdownEl, settings.animationDuration, {
            display: 'none',
            height: 0
          });
        }
      });
    }

    /**
     * Show and set height, then once done fade it in
     */
    function show(dropdownEl) {
      TweenLite.to(dropdownEl, settings.animationDuration, {
        display: 'block',
        height: dropdownEl.getAttribute(settings.dataHeightAttr),
        onComplete: function() {
          TweenLite.to(dropdownEl, settings.animationDuration, {autoAlpha: 1});
        }
      });
    }

    /**
     * @TODO hide other dropdowns if they're active when another one is opened
     */
    function hideOthers() {
      allDropdowns.forEach(function(el) {

      });
    }

    /**
     * When plugin is called, we calculate the height for when it expands
     * then hide the element
     */
    function setHeight(trigger) {
      var dropdownId = trigger.getAttribute(settings.dataIdSelector),
          dropdownEl = document.getElementById(dropdownId);

      allDropdowns.push(dropdownEl);

      dropdownEl.setAttribute(settings.dataHeightAttr ,dropdownEl.getBoundingClientRect().height + 'px');

      hide(dropdownEl);
    }

    /**
     * Kick it off once called
     */
    return this.each(function() {
      setHeight(this);
      $(this).on('click', toggleDropdown);
    });
  };
})(jQuery);
