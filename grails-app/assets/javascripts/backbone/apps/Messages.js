(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.startWithParent = false;

    Messages.globalChannel = Backbone.Wreqr.radio.channel('global');
    Messages.vent = Messages.globalChannel.vent;
    Messages.request = function() {
      return Messages.globalChannel.reqres.request.apply(Messages.globalChannel.reqres, arguments);
    };

    Messages.on('start', function(options) {
      setup(options);

      // important run this after creating the router
      // to trigger routes correctly on startup
      if (Backbone.history) {
        Backbone.history.start();
      }

      if (App.getCurrentRoute() === '') {
        Messages.vent.trigger('messages:list');
      }
    });

    Messages.vent.on('messages:list', showList);
    Messages.vent.on('messages:show', showMessage);

    function setup(options) {
      Messages.rootController = new Messages.MessageController(options);
      new Messages.Router({ controller: Messages.rootController });

      addReqRes('messages:rootPath', options.rootPath);
    }

    function addReqRes(key, object) {
      Messages.globalChannel.reqres.setHandler(key, function() {
        return object;
      });
    }

    function showList() {
      App.navigate('messages');
      Messages.rootController.showList();
    }

    function showMessage(id) {
      App.navigate('messages/' + id);
      Messages.rootController.showMessage(id);
    }

  });

}).call(this);