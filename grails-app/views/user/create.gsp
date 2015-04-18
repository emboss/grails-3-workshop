<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
  </head>
  <body>
    <div class="container signup">
      <g:csrfForm action="save">
        <h1><g:message code="user.create.title"/></h1>
        <fieldset class="form">
          <div class="form-group">
            <label for="firstName">
              <g:message code="user.firstName.label"/>
              <span class="required-indicator">*</span>
            </label>
            <input class="form-control" id="firstName" type="text" name="firstName" required/>
          </div>
          <div class="form-group">
            <label for="lastName">
              <g:message code="user.lastName.label"/>
              <span class="required-indicator">*</span>
            </label>
            <input class="form-control" id="lastName" type="text" name="lastName" required/>
          </div>
          <div class="form-group">
            <label for="email">
              <g:message code="user.email.label"/>
              <span class="required-indicator">*</span>
            </label>
            <input class="form-control" id="email" type="text" name="email" required/>
          </div>
          <div class="form-group">
            <label for="password">
              <g:message code="user.password.label"/>
              <span class="required-indicator">*</span>
            </label>
            <input class="form-control" id="password" type="password" name="password" required/>
          </div>
        </fieldset>
        <g:render template="/shared/form-errors" model="['bean': user]"/>
        <fieldset class="buttons">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            <g:message code="default.button.create.label"/>
          </button>
        </fieldset>
      </g:csrfForm>
    </div>
  </body>
</html>