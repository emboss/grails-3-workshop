package messages

import grails.transaction.Transactional

class SignupController {

    def userService

    def index() {
        respond new User()
    }

    @Transactional
    def save() {
        log.info(params)
        def user = userService.create(params)

        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors, view:'index'
            return
        }

        flash.message = message(code: 'default.created.message', args: [message(code: 'user.label', default: 'User'), user.id])
        redirect action: "index", method: "GET"
    }
}
