package messages.interceptors

import messages.auth.CurrentUserAware

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
class CurrentUserInterceptor implements CurrentUserAware {

    CurrentUserInterceptor() {
        matchAll()
    }

    boolean before() { true }

    boolean after() {
        // Inject currentUser to all views
        if (model) {
            model['currentUser'] = currentUser
        }
        true
    }

    void afterView() { }

}
