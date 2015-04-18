// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
// JS libraries
//= require lib/jquery-2.1.3.js
//= require lib/underscore-1.8.3.min
//= require lib/bootstrap-3.3.4.min
//
// Execute this file's JS first to declare the app namespace
//= require_self
//
// Pull in application-specific JS files
//= require_tree app

(function() {

  // declare app namespace
  this.app = {
  };

  if (typeof jQuery !== 'undefined') {
    (function($) {
      $('#spinner').ajaxStart(function() {
        $(this).fadeIn();
      }).ajaxStop(function() {
        $(this).fadeOut();
      });
    })(jQuery);
  }
}).call(this);