package messages

class LoginController {

    def index() {
        log.info(request.getAttribute('_csrf'))
    }

}
