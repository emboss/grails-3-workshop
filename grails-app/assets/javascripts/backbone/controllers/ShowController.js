(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.ShowController = Marionette.Object.extend({

      showMessage: function(region, message) {
        region.show(new Messages.MessageViewer({ model: message }));
      }

    });

  });

}).call(this);