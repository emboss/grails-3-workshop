(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.Router = Marionette.AppRouter.extend({

      appRoutes: {
        'messages': 'showList',
        'messages/:id': 'showMessage'
      }

    });

  });

}).call(this);