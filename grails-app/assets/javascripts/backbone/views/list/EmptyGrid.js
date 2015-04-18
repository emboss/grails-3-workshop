(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.EmptyGrid = Marionette.ItemView.extend({

      tagName: 'tr',
      template: 'list/empty-grid'

    });

  });

}).call(this);