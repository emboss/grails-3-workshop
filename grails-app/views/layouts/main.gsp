<%@ page import="org.springframework.web.servlet.support.RequestContextUtils" %>
<!doctype html>
<html lang="${RequestContextUtils.getLocale(request)?.language}">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <g:if test="${request._csrf}">
      <meta name="_csrf" content="${request._csrf?.token}"/>
      <meta name="_csrf_header" content="${request._csrf?.headerName}"/>
    </g:if>
    <title><g:layoutTitle default="${message(code: 'application.title')}"/></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <asset:stylesheet src="application.css"/>
    <g:layoutHead/>
  </head>
  <body>
    <g:render template="/shared/nav"/>

    <g:layoutBody/>

    <div id="spinner" class="spinner" style="display:none;">
      <g:message code="spinner.alt" default="Loading&hellip;"/>
    </div>

    <asset:javascript src="application.js" charset="utf-8"/>
    <script src="${g.resource(dir: 'javascripts', file: 'hello.js')}"></script>
    <g:applyLayout name="js">
      <g:pageProperty name="page.js"/>
    </g:applyLayout>
  </body>
</html>