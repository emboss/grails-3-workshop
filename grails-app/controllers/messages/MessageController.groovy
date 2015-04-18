package messages

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class MessageController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Message.list(params), model:[messageCount: Message.count()]
    }

    def show(Message message) {
        respond message
    }

    def create() {
        respond new Message(params)
    }

    @Transactional
    def save(Message msg) {
        log.info(msg.from)
        log.info(msg.to)
        if (msg == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (msg.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond msg.errors, view:'create'
            return
        }

        msg.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'message.label', default: 'Message'), msg.id])
                redirect msg
            }
            '*' { respond msg, [status: CREATED] }
        }
    }

    def edit(Message message) {
        respond message
    }

    @Transactional
    def update(Message msg) {
        if (msg == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (msg.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond msg.errors, view:'edit'
            return
        }

        msg.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'message.label', default: 'Message'), msg.id])
                redirect msg
            }
            '*'{ respond msg, [status: OK] }
        }
    }

    @Transactional
    def delete(Message msg) {

        if (msg == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        msg.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'message.label', default: 'Message'), msg.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'message.label', default: 'Message'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
