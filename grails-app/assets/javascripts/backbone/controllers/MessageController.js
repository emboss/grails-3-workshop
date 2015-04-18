(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.MessageController = Marionette.Object.extend({

      initialize: function(options) {
        this.options = options
        this.layout = new Messages.MainLayout({ el: '.welcome-index' });
      },

      showList: function() {
        destroyController(this.controller);
        this.controller = new Messages.ListController();
        this.controller.showList(this.layout.main, this.options);
      },

      showMessage: function(id) {
        destroyController(this.controller);
        this.controller = new Messages.ShowController();

        getMessage(id, this.options.messages).done(_.bind(function(message) {
          this.controller.showMessage(this.layout.main, message);
        }, this));
      },

      onBeforeDestroy: function() {
        destroyController(this.controller);
      }

    });

    function destroyController(controller) {
      if (controller) {
        controller.destroy();
      }
    }

    function getMessage(id, messages) {
      var existing = messages.findWhere({ id: id });
      if (existing) {
        return $.Deferred().resolve(existing);
      }

      return loadMessage(id);
    }

    function loadMessage(id) {
      var deferred = $.Deferred(),
          rootPath = Messages.request('messages:rootPath'),
          message = new Messages.Message({
            urlRoot: rootPath,
            id: id
          });

       message.fetch({
         success: function() {
           deferred.resolve(message);
         },
         error: function() {
           console.log(arguments);
         }
       });

       return deferred.promise();
    }

  });

}).call(this);