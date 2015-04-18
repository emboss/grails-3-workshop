package messages

import grails.transaction.Transactional
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder

@Transactional(readOnly = true)
class WelcomeController {

    def index() {
        if (!(SecurityContextHolder.context.authentication instanceof AnonymousAuthenticationToken)) {
            redirect(controller: 'message', action: 'index')
        }
    }
}
