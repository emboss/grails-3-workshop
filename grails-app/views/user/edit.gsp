<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
  </head>
  <body>
    <div class="container user-edit">
      <g:csrfForm resource="${user}" method="put">
        <h1><g:message code="user.profile.title"/></h1>
        <g:render template="/shared/flash-status"/>
        <fieldset class="form">
          <div class="form-group">
            <label for="firstName">
              <g:message code="user.firstName.label"/>
              <span class="required-indicator">*</span>
            </label>
            <input class="form-control"
                   id="firstName"
                   type="text"
                   name="firstName"
                   placeholder="First Name"
                   value="${user.firstName}"
                   required
            />
          </div>
          <div class="form-group">
            <label for="lastName">
              <g:message code="user.lastName.label"/>
              <span class="required-indicator">*</span>
            </label>
            <input class="form-control"
                   id="lastName"
                   type="text"
                   name="lastName"
                   placeholder="Last Name"
                   value="${user.lastName}"
                   required/>
          </div>
          <div class="form-group">
            <label for="email">
              <g:message code="user.email.label"/>
              <span class="required-indicator">*</span>
            </label>
            <input class="form-control"
                   id="email"
                   type="text"
                   name="email"
                   placeholder="Email"
                   value="${user.email}"
                   required
            />
          </div>
          <div class="form-group">
            <a href="#" class="js-change-password">
              <g:message code="user.changePassword.label"/>
            </a>
            <div class="js-password-container hidden">
                <a href="#" class="js-keep-password">
                  <g:message code="user.keepPassword.label"/>
                </a>
                <label for="password">
                  <g:message code="user.password.label"/>
                  <span class="required-indicator">*</span>
                </label>
                <input class="form-control js-password"
                       id="password"
                       type="password"
                       name="password"
                       placeholder="Password"
                       disabled
                       required
                >
            </div>
          </div>
        </fieldset>
        <fieldset class="buttons">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            <g:message code="user.action.save"/>
          </button>
        </fieldset>
        <g:render template="/shared/form-errors" model="['bean': user]"/>
      </g:csrfForm>
    </div>

    <content tag="js">
        <asset:javascript src="custom/user/edit.js"/>
    </content>
  </body>
</html>