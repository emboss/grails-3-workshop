(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.MainLayout = Marionette.LayoutView.extend({

      regions: {
        main: '.js-main'
      }

    });

  });

}).call(this);