(function() {
  'use strict';

  var app = Marionette.Application.extend({

    navigate: function(route, options) {
      options || (options = {});
      Backbone.history.navigate(route, options);
    },

    getCurrentRoute: function() {
      return Backbone.history.fragment;
    },

    startSubApp: function(appName, args) {
      var currentApp = MarionetteApp.module(appName);
      if (MarionetteApp.currentApp === currentApp) return;

      if (MarionetteApp.currentApp) MarionetteApp.currentApp.stop();

      MarionetteApp.currentApp = currentApp;
      currentApp.start(args);
    }

  });

  this.MarionetteApp = new app();

}).call(this);