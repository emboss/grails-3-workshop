import {ItemView} from 'backbone.marionette';
import $ from 'jquery';
import _ from 'underscore';
import template from 'templates/current-time';

export default ItemView.extend({
  template: template,

  templateHelpers() {
    return {
      time: new Date().toString()
    };
  }
});
