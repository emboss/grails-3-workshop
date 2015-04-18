(function() {
  'use strict';

  console.log($('html').attr('lang'));

  i18n.init({
    lng: $('html').attr('lang'),
    fallbackLng: false,
    interpolationPrefix: '%{',
    interpolationSuffix: '}',
    getAsync: false,
    resStore: MarionetteApp.Locales
  });

})();
