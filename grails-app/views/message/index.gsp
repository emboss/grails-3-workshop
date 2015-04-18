<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
  </head>
  <body>
    <div class="container message-index">
      <div class="messages">
        <header class="row">
          <h1 class="col-md-8">
            My messages
          </h1>
          <div class="actions col-md-4">
            <g:render template="index/actions"/>
          </div>
        </header>
        <g:render template="/shared/flash-status"/>
        <g:render template="index/message-list"/>
      </div>
    </div>
  </body>
</html>