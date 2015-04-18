Handlebars.registerHelper('t', function(i18nKey) {
  var result = i18n.t(i18nKey);
  return new Handlebars.SafeString(result);
});