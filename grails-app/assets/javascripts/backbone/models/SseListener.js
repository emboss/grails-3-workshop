(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.SseListener = function(eventPath) {
      this.eventPath = eventPath;
    }

    _.extend(Messages.SseListener.prototype, {
      start: function() {
        var source = new EventSource(this.eventPath);
        source.addEventListener('message:created', function(event) {
          Messages.vent.trigger('message:created', event);
        }, false);
      }
    });

  });

}).call(this);