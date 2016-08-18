import $ from 'jquery';

window.$ = window.jQuery = $;

// needs to be require, otherwise it complains about missing jQuery
// when using import
// require('bootstrap-sass');

import 'app/main';