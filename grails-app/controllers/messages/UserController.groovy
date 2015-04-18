package messages

import messages.auth.CurrentUserAware

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class UserController implements CurrentUserAware {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def userService

   def create() {
        respond new User(params)
    }

    def save() {
        def user = userService.create(params)

        if (user.hasErrors()) {
            return renderErrors(user, 'create')
        }

        respondWith(
            messageCode: 'default.created.message',
            redirect: [url: "/login", method: "GET"],
            status: CREATED
        )
    }

    def edit(User user) {
        authorize(user) {
            if (user.id != currentUser.id) {
                return render(status: FORBIDDEN)
            }
            respond user
        }
    }

    def update() {
        def user = User.get(params.id)

        authorize(user) {
            user = userService.update(user, params)

            if (user.hasErrors()) {
                return renderErrors(user)
            }

            respondWith(
                messageCode: 'default.updated.message',
                redirect: [action: "edit", method: "GET", id: user.id],
                status: OK
            )
        }
    }

    @Transactional
    def delete(User user) {
        authorize(user) {
            user.delete flush:true

            respondWith(
                messageCode: 'default.deleted.message',
                redirect: [action: "index", method: "GET"],
                status: NO_CONTENT
            )
        }
    }

    private authorize(user, Closure fn) {
        if (user == null) {
            return renderErrors(user)
        }
        if (user.id != currentUser.id) {
            return render(status: FORBIDDEN)
        }
        fn()
    }

    private respondWith(options) {
        request.withFormat {
            form multipartform {
                flash.message = message(
                    code: options.messageCode,
                    args: [message(code: 'user.label', default: 'User'), '']
                )
                redirect(options.redirect)
            }
            '*'{ render status: options.status }
        }
    }

    private renderErrors(user, view='edit') {
        if (user == null) {
            return notFound()
        }
        respond user.errors, view: view, id: user.id
    }

    private void notFound() {
        respondWith(
            messageCode: 'default.not.found.message',
            redirect: [action: "edit", method: "GET"],
            status: NOT_FOUND
        )
    }
}
