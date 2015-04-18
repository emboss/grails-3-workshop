package messages

import grails.transaction.Transactional

@Transactional(readOnly = true)
class LoginController {

    def index() {
        log.info("Users: ${User.list()}")
        log.info("Format: ${params.format}")
    }

}
