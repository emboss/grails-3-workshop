<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
  </head>
  <body>
    <div class="container message-create">
      <g:csrfForm resource="${message}" method="post">
        <h1><g:message code="message.create.title"/></h1>
        <fieldset class="form">
            <div class="form-inline">
                <label for="to">
                    <g:message code="message.to.label"/>
                    <span class="required-indicator">*</span>
                </label>
                <select class="form-control" id="to" type="text" name="to.id">
                  <g:each in="${recipients}">
                      <option value="${it.id}">${it.fullName}</option>
                  </g:each>
                </select>
            </div>
            <div class="message-form">
              <div class="form-group">
                <label for="title">
                    <g:message code="message.title.label"/>
                    <span class="required-indicator">*</span>
                </label>
                <input class="form-control" id="title" type="text" name="title" placeholder="Title" required/>
              </div>
              <div class="form-group">
                <label for="body">
                    <g:message code="message.body.label"/>
                    <span class="required-indicator">*</span>
                </label>
                <textarea class="form-control" id="body" rows="10" name="body" required></textarea>
              </div>
            </div>
        </fieldset>
        <fieldset class="buttons">
          <div class="row">
            <div class="col-md-6">
              <button class="save btn btn-lg btn-primary" type="submit">
                <g:message code="message.action.send"/>
              </button>
            </div>
            <div class="col-md-6">
              <g:link class="cancel btn btn-lg btn-default" action="index">
                <g:message code="message.action.cancel"/>
              </g:link>
            </div>
          </div>
        </fieldset>
        <g:render template="/shared/form-errors" model="['bean': message]"/>
      </g:csrfForm>
    </div>
  </body>
</html>
