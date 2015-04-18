(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.ListEvents = Marionette.Object.extend({

      events: {
        Grid: {
          'childview:message:show': 'onMessageShow',
          'childview:message:delete': 'onMessageDelete'
        }
      },

      initialize: function(options) {
        this.state = options.state;
        this.views = options.views;

        this.bindEntityEvents(this.views.grid, this.events.Grid);
      },

      onMessageShow: function(childView, args) {
        Messages.vent.trigger('messages:show', args.model.get('id'));
      },

      onMessageDelete: function(childView, args) {

        var message = args.model;
        message.destroy();
      }

    });

  });

}).call(this);