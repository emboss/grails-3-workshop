<g:if test="${currentUser}">
  <div class="logout pull-right"><g:link url="/logout">
    <i class="fa fa-power-off"></i>
    <g:message code="logout.label" args="[currentUser.firstName]"/>
  </g:link></div>
</g:if>
<g:else>
  <div class="login pull-right"><g:link url="/login">
    <g:message code="login.label"/>
  </g:link></div>
</g:else>
