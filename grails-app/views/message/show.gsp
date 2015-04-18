<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
    <title><g:message code="application.title"/> - ${message.title}</title>
  </head>
  <body>
    <div class="container message-show">
      <div class="message-container">
        <h1>${message.title}</h1>
        <div class="message-details form-horizontal">
          <div class="form-group">
            <label class="col-md-2"><g:message code="message.from.label"/>:</label>
            <div class="from col-md-10">${message.from}</div>
          </div>
          <div class="form-group">
            <label class="col-md-2"><g:message code="message.dateCreated.label"/>:</label>
            <div class="sent col-md-10"><g:formatDate format="yyyy-MM-dd HH:mm" date="${message.dateCreated}"/></div>
          </div>
        </div>
        <div class="message-body">
          ${message.body}
        </div>
      </div>
    </div>
  </body>
</html>