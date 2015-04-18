package messages.auth

import grails.core.GrailsApplication
import grails.core.support.GrailsApplicationAware
import org.springframework.security.authentication.AnonymousAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
trait CurrentUserAware implements GrailsApplicationAware {

    GrailsApplication grailsApplication

    def getCurrentUser() {
        Authentication auth = SecurityContextHolder.context.authentication
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            def userService = grailsApplication.mainContext.getBean("userService")
            userService.findByEmail(auth.name)
        } else {
            null
        }
    }
}
