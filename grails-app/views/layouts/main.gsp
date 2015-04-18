<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><g:layoutTitle default="Grails"/></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <asset:stylesheet src="application.css"/>
    <g:layoutHead/>
  </head>
  <body>
    <g:layoutBody/>

    <div id="spinner" class="spinner" style="display:none;">
      <g:message code="spinner.alt" default="Loading&hellip;"/>
    </div>

    <asset:javascript src="application.js" charset="utf-8"/>
    <g:applyLayout name="js">
      <g:pageProperty name="page.js"/>
    </g:applyLayout>
  </body>
</html>