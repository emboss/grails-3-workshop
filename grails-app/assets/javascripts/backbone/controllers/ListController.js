(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.ListController = Marionette.Object.extend({

      showList: function(region, options) {
        var messages = options.messages,
            status = options.status;

        var views = {
          layout: new Messages.MessageList({ status: status }),
          grid: new Messages.MessageGrid({ collection: messages }),
          actions: new Messages.ListActions()
        };

        region.show(views.layout);
        views.layout.actions.show(views.actions);
        views.layout.grid.show(views.grid);

        this.eventHandler = new Messages.ListEvents({
          state: { messages: messages },
          views: views
        });
      },

      onBeforeDestroy: function() {
        if (this.eventHandler) {
          this.eventHandler.destroy();
        }
      }

    });

  });

}).call(this);