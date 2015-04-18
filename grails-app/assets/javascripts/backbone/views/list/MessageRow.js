(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.MessageRow = Marionette.ItemView.extend({

      tagName: 'tr',
      template: 'list/message-row',

      templateHelpers: function() {
        return {
          deletePath: this.model.url()
        }
      },

      ui: {
        deleteButton: '.js-delete'
      },

      triggers: {
        'click': 'message:show',
        'click @ui.deleteButton': 'message:delete'
      }

    });

  });

}).call(this);