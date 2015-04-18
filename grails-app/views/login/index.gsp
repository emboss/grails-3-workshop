<!DOCTYPE html>
<html>
  <head lang="en">
    <meta name="layout" content="main">
  </head>
  <body>
    <div class="container">
      <g:csrfForm class="login" url="/login">
        <div class="form-group">
          <label for="email"><g:message code="user.email.label"/></label>
          <input class="form-control"
                 type="email"
                 name="email"
                 id="email"
                 placeholder="${message(code: 'user.email.placeholder')}"
                 required
                 autofocus
          >
        </div>
        <div class="form-group">
          <label for="password"><g:message code="user.password.label"/></label>
          <input class="form-control"
                 type="password"
                 name="password"
                 id="password"
                 placeholder="${message(code: 'user.password.placeholder')}"
                 required
          >
        </div>
        <g:if test="${params.failed}">
          <div class="error">
            <g:message code="login.invalid.label"/>
          </div>
        </g:if>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          <g:message code="login.label"/>
        </button>
        <g:link class="signup" url="/signup">
          <g:message code="login.signup.label"/>
        </g:link>
      </g:csrfForm>
    </div>
  </body>
</html>