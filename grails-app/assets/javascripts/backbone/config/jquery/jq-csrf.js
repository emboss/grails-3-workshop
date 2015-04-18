$.ajaxPrefilter(function(options, originalOptions, xhr) {
  if (!options.crossDomain) {
    var token = $('meta[name="_csrf"]').attr('content'),
        tokenName = $('meta[name="_csrf_header"]').attr('content');

    if (token) xhr.setRequestHeader(tokenName, token);
  }
});