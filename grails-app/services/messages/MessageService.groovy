package messages

import grails.transaction.Transactional
import grails.web.databinding.DataBinder
import messages.auth.CurrentUserAware

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
@Transactional
class MessageService implements CurrentUserAware, DataBinder {

    private static final ATTRIBUTES = [
        include: [
            'to.id',
            'title',
            'body'
        ]
    ]

    @Transactional(readOnly = true)
    def listMessages() {
        currentUser.messages
    }

    @Transactional(readOnly = true)
    def listRecipients() {
        User.where { id != currentUser.id }.findAll()
    }

    def create(params) {
        def msg = new Message()
        bindData(msg, params, ATTRIBUTES)
        msg.from = currentUser
        msg.save flush: true
    }

}
