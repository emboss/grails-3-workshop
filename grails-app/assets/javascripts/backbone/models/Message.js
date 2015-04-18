(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.Message = Backbone.Model.extend({

      initialize: function(options) {
        options = (options || {});
        if (options.urlRoot) {
          this.urlRoot = options.urlRoot;
        }
      }
    });

    Messages.MessageCollection = Backbone.Collection.extend({
      model: Messages.Message,

      initialize: function(messages, options) {
        options = (options || {});
        this.url = options.url;
      }
    })

  });

}).call(this);