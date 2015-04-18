class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?"()

        "/messages"(resources: 'message', includes: ['index', 'show', 'create', 'save', 'delete'])
        "/users"(resources: 'user', includes: ['create', 'save', 'edit', 'update', 'delete'])

        "/"(controller: "welcome", action: "index")
        "/login"(controller: "login", action: "index")
        "/signup"(controller: "user", action: "create")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
