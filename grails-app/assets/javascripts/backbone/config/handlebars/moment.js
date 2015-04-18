Handlebars.registerHelper('dateTime', function(date) {
  var result = moment(date).format('DD.MM.YYYY, HH:mm');
  return new Handlebars.SafeString(result);
});