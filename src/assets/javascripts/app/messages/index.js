import $ from 'jquery';
import runInitializer from 'lib/run-initializer';
import CurrentTimeView from './CurrentTimeView';

runInitializer('.message-index', () => {
  console.log('hello gulp');
  let view = new CurrentTimeView().render();
  $('body').append(view.$el);
});