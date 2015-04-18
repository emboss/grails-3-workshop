package messages.auth

import org.springframework.context.annotation.Role

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
class CurrentUser extends org.springframework.security.core.userdetails.User {

    public static final String DEFAULT_ROLE = 'USER'

    def user

    public CurrentUser(user) {
        super(user.email, user.passwordHash, []);
        this.user = user;
    }

    def getUser() {
        return user;
    }

    public Long getId() {
        user.id
    }

    public Role getRole() {
        DEFAULT_ROLE
    }

}
