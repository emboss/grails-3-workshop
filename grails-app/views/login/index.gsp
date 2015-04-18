<!DOCTYPE html>
<html>
  <head lang="en">
    <meta name="layout" content="main">
    <title>Login</title>
  </head>
  <body>
    <form role="form" action="/login" method="post">
      <input type="hidden" name="${request._csrf.parameterName}" value="${request._csrf.token}"/>
      <div>
        <label for="email">Email address</label>
        <input type="email" name="email" id="email" required autofocus>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required>
      </div>
      <g:if test="${params.failed}">
        <div class="error">
          Invalid user or password.
        </div>
      </g:if>
      <button type="submit">Login</button>
    </form>
  </body>
</html>