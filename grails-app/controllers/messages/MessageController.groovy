package messages

import grails.converters.JSON
import grails.transaction.Transactional
import messages.auth.CurrentUserAware

import static org.springframework.http.HttpStatus.*

@Transactional(readOnly = true)
class MessageController implements CurrentUserAware {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def messageService

    def index() {
        def messageList = messageService.listMessages()
        respond messageList, model: [messageList: messageList]
    }

    def show(Message msg) {
        authorize(msg) {
            respond msg
        }
    }

    def create() {
        respond new Message(params), model: [recipients: messageService.listRecipients()]
    }

    def save() {
        def msg = messageService.create(params)

        if (msg.hasErrors()) {
            return renderErrors(msg)
        }

        respondWith(
            messageCode: 'default.created.message',
            redirect: [action: "index", method: "GET"],
            status: CREATED
        )
    }

    @Transactional
    def delete(Message msg) {
        authorize(msg) {
            msg.delete flush:true

            respondWith(
                messageCode: 'default.deleted.message',
                redirect: [action: "index", method: "GET"],
                status: NO_CONTENT
            )
        }
    }

    private authorize(msg, Closure fn) {
        if (msg == null) {
            return renderErrors(msg)
        }
        if (msg.to.id != currentUser.id) {
            return render(status: FORBIDDEN)
        }
        fn()
    }

    private void notFound() {
        respondWith(
            messageCode: 'default.not.found.message',
            redirect: [action: "index", method: "GET"],
            status: NOT_FOUND
        )
    }

    private respondWith(options) {
        request.withFormat {
            form multipartform {
                flash.message = message(
                    code: options.messageCode,
                    args: [message(code: 'message.label', default: 'Message'), '']
                )
                redirect(options.redirect)
            }
            '*'{ render status: options.status }
        }
    }

    private renderErrors(msg, view='index') {
        if (msg == null) {
            return notFound()
        }
        respond msg.errors, view: view, id: msg.id
    }
}
