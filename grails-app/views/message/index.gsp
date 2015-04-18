<%@ page import="grails.converters.JSON" %>
<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
  </head>
  <body>
    <div class="container message-index js-main"></div>
  </body>
  <content tag="js">
    <script charset="utf-8">
      $(function() {
        <g:applyCodec encodeAs="none">
          var messages = ${messageJSON},
              rootPath = '${createLink(controller: "message", action: "index")}',
              eventPath = '${createLink(controller: "sse", action: "events")}';
              status = '${flash.message}';
        </g:applyCodec>

        MarionetteApp.startSubApp('Messages', {
          messages: new MarionetteApp.Messages.MessageCollection(messages, {
            url: rootPath
          }),
          rootPath: rootPath,
          eventPath: eventPath,
          status: status === '' ? null : status
        });
      });
    </script>
  </content>
</html>