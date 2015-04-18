class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(controller: "welcome", action: "index")
        "/login"(controller: "login", action: "index")
        "/signup"(controller: "user", action: "create")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
