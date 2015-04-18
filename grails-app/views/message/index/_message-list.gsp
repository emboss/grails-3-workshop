<table class="messages table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <th><g:message code="message.title.label"/></th>
      <th><g:message code="message.from.label"/></th>
      <th><g:message code="message.dateCreated.label"/></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <g:if test="${messageList.isEmpty()}">
      <g:render template="index/empty"/>
    </g:if>
    <g:else>
      <g:render template="index/message-row" collection="${messageList}"/>
    </g:else>
  </tbody>
</table>

