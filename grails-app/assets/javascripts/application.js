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
//= require lib/backbone-1.1.2.min
//= require lib/backbone.marionette-2.4.1.min
//= require lib/handlebars-3.0.3.min
//= require lib/i18next-1.8.0.min
//= require lib/moment-2.10.2.min
//
//= encoding UTF-8
//= require_tree templates
//
// Marionette Application files
//= require backbone/MarionetteApp
//= require_tree backbone/locales
//= require_tree backbone/config
//= require_tree backbone/models
//= require_tree backbone/controllers
//= require_tree backbone/views
//= require_tree backbone/routers
//= require_tree backbone/apps
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