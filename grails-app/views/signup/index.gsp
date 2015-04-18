<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
    <g:set var="entityName" value="${message(code: 'user.label', default: 'User')}" />
    <title><g:message code="default.create.label" args="[entityName]" /></title>
  </head>
  <body>
    <div id="create-user" class="content scaffold-create" role="main">
      <h1><g:message code="default.create.label" args="[entityName]" /></h1>
      <g:if test="${flash.message}">
        <div class="message" role="status">${flash.message}</div>
      </g:if>
      <g:hasErrors bean="${user}">
        <ul class="errors" role="alert">
          <g:eachError bean="${user}" var="error">
            <li <g:if test="${error in org.springframework.validation.FieldError}">data-field-id="${error.field}"</g:if>><g:message error="${error}"/></li>
          </g:eachError>
        </ul>
      </g:hasErrors>
      <g:form action="save">
        <input type="hidden" name="${request._csrf.parameterName}" value="${request._csrf.token}"/>
        <fieldset class="form">
          <f:with bean="${user}">
            <f:field property="firstName"/>
            <f:field property="lastName"/>
            <f:field property="email"/>
            <div class="fieldcontain required">
              <label for="password">
                Password
                <span class="required-indicator">*</span>
              </label>
              <g:passwordField id="password" name="password"/>
            </div>
          </f:with>
        </fieldset>
        <fieldset class="buttons">
          <g:submitButton name="create" class="save" value="${message(code: 'default.button.create.label', default: 'Create')}" />
        </fieldset>
      </g:form>
    </div>
  </body>
</html>