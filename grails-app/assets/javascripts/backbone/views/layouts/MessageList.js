(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.MessageList = Marionette.LayoutView.extend({

      template: 'layouts/message-list',

      templateHelpers: function() {
        return {
          status: this.getOption('status')
        };
      },

      regions: {
        status: '.js-status',
        actions: '.js-actions',
        grid: '.js-grid'
      }

    });

  });

}).call(this);