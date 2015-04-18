<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="main">
  </head>
  <body>
    <div class="container message-index js-main"
         data-message-path="${}"
    ></div>
  </body>
  <content tag="js">
    <script>
      $(function() {
        <g:applyCodec encodeAs="none">
          var messages = ${messageList.encodeAsJSON()},
              rootPath = '<g:createLink controller="message" action="index"/>';
              status = '${flash.message}';
        </g:applyCodec>

        MarionetteApp.startSubApp('Messages', {
          messages: new MarionetteApp.Messages.MessageCollection(messages, {
            url: rootPath
          }),
          rootPath: rootPath,
          status: status === '' ? null : status
        });
      });
    </script>
  </content>
</html>