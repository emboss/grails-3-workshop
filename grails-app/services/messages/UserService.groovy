package messages

import grails.transaction.Transactional
import grails.web.databinding.DataBinder
import messages.auth.CurrentUser
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

@Transactional
class UserService implements DataBinder {

    private static final int MIN_PASSWORD_SIZE = 4

    private static final ATTRIBUTES = [
        include: [
            'firstName',
            'lastName',
            'email'
        ]
    ]

    @Transactional(readOnly = true)
    def findByEmail(email) {
        User.findByEmail(email?.toLowerCase())
    }

    def create(params) {
        User user = new User(
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            role: CurrentUser.DEFAULT_ROLE
        )
        setPasswordAndReturnUser(user, params)
    }

    def update(user, params) {
        if (user == null) return null
        bindData(user, params, ATTRIBUTES)
        setPasswordAndReturnUser(user, params)
    }

    private setPasswordAndReturnUser(user, params) {
        if (params.password) {
            def password = params.password
            if (!isValidPassword(password, user)) return user
            user.passwordHash = new BCryptPasswordEncoder().encode(password)
        }
        user.email = user.email?.toLowerCase()
        user.save flush: true
    }

    private isValidPassword(password, user) {
        if (password?.isEmpty()) {
            user.errors.reject('user.password.blank', 'Password must not be blank')
            return false
        }
        if (password.size() < MIN_PASSWORD_SIZE) {
            log.info("pw: $password, size: ${password.size()}")
            user.errors.reject(
                'user.password.tooShort',
                [MIN_PASSWORD_SIZE] as Object[],
                "Password must be at least $MIN_PASSWORD_SIZE long"
            )
            return false
        }
        true
    }
}
