<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/"><g:message code="application.title"/></a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><g:link controller="message" action="index"><g:message code="menu.messages"/></g:link></li>
        <g:if test="${currentUser}">
          <li><g:link resource="${currentUser}" action="edit"><g:message code="menu.profile"/></g:link></li>
        </g:if>
      </ul>
      <g:render template="/shared/login"/>
    </div>
  </div>
</nav>