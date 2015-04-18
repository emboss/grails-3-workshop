(function() {
  'use strict';

  this.MarionetteApp.module('Messages', function(Messages, App, Backbone, Marionette, $, _) {

    Messages.MessageGrid = Marionette.CompositeView.extend({

      template: 'list/message-grid',

      getChildView: function(item) {
        return Messages.MessageRow;
      },

      childViewContainer: 'tbody',

      getEmptyView: function() {
        return Messages.EmptyGrid;
      }

    });

  });

}).call(this);