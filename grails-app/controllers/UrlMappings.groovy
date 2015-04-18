class UrlMappings {

    static mappings = {


        "/messages"(resources: 'message', includes: ['index', 'show', 'create', 'save', 'delete'])
        "/users"(resources: 'user', includes: ['create', 'save', 'edit', 'update', 'delete'])

        "/"(controller: "welcome", action: "index")
        "/login"(controller: "login", action: "index")
        "/signup"(controller: "user", action: "create")
        "/events"(controller: "sse", action: "events")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
