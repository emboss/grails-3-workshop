<!DOCTYPE html>
<html>
  <head lang="en">
    <meta name="layout" content="main">
    <title>Login</title>
  </head>
  <body>
    <g:csrfForm url="/login">
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
    </g:csrfForm>
  </body>
</html>