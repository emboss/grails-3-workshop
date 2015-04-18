<g:if test="${currentUser}">
  <div class="logout pull-right">
    <g:csrfForm url="/logout" method="post">
      <button type="submit">
        <i class="fa fa-power-off"></i>
        <g:message code="logout.label" args="[currentUser.firstName]"/>
      </button>
    </g:csrfForm>
  </div>
</g:if>
<g:else>
  <div class="login pull-right"><g:link url="/login">
    <g:message code="login.label"/>
  </g:link></div>
</g:else>
