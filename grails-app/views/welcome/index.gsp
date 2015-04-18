<html>
  <head>
    <meta name="layout" content="main">
    <asset:stylesheet src="custom/welcome/index.css"/>
  </head>
  <body>
    <div class="container welcome-index">
      <header>
        <h1>
          <g:message code="application.title"/>
        </h1>
        <p class="lead">
          <g:message code="welcome.lead.label"/>
        </p>
        <div class="actions">
          <g:link url="/signup">
            <g:message code="welcome.signup.label"/>
          </g:link>
          <g:message code="welcome.or.label"/>
          <g:link url="/login">
            <g:message code="welcome.login.label"/>
          </g:link>
        </div>
      </header>
    </div>
  </body>
</html>