(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.MessageViewer = Marionette.ItemView.extend({

      template: 'show/message-viewer'

    });

  });

}).call(this);