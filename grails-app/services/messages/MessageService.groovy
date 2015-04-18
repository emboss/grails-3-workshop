package messages

import grails.transaction.Transactional
import messages.auth.CurrentUserAware

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
@Transactional
class MessageService implements CurrentUserAware {

    @Transactional(readOnly = true)
    def listMessages() {
        currentUser.messages
    }

    @Transactional(readOnly = true)
    def listRecipients() {
        User.where { id != currentUser.id }.findAll()
    }

    def create(params) {
        def msg = new Message(params)
        msg.from = currentUser
        msg.save flush: true
    }

}
