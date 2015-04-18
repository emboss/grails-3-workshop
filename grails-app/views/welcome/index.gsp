<html>
  <head>
    <meta name="layout" content="main">
    <title>welcome/index</title>
    <asset:stylesheet src="custom/welcome/index.css"/>
  </head>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container welcome-index">
      <header>
        <h1>Bootstrap starter template</h1>
        <p class="lead">Welcome to the messages app.</p>
        <g:link controller="signup">Sign up</g:link>
      </header>

      <div id="messages"></div>
    </div>

    <content tag="js">
      <asset:javascript src="custom/welcome/index.js"/>
    </content>
  </body>
</html>