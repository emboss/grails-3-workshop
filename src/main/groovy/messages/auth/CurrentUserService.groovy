package messages.auth

import org.apache.commons.logging.Log
import org.apache.commons.logging.LogFactory
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
class CurrentUserService implements UserDetailsService {

    def userService

    private final Log LOG = LogFactory.getLog(CurrentUserService)

    @Override
    public CurrentUser loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            def user = userService.findByEmail(email)
            LOG.info("Found user $user")
            new CurrentUser(user)
        } catch (Exception ex) {
            throw new UsernameNotFoundException(String.format("User with email=%s was not found", email))
        }
    }
}