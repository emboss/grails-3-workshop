package messages

import grails.transaction.Transactional
import messages.auth.CurrentUser
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

@Transactional
class UserService {

    def findByEmail(email) {
        log.info("Trying to find $email")
        User.findByEmail(email)
    }

    def create(params) {
        User user = new User(
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            passwordHash: new BCryptPasswordEncoder().encode(params.password),
            role: CurrentUser.DEFAULT_ROLE
        )
        user.save flush: true
        user
    }
}
