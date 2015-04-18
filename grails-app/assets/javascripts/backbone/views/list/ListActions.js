(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.ListActions = Marionette.ItemView.extend({

      template: 'list/list-actions',

      templateHelpers: function() {
        var rootPath = Messages.request('messages:rootPath');

        return {
          createPath: rootPath + '/create'
        };
      }

    });

  });

}).call(this);