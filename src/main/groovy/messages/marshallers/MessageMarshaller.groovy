package messages.marshallers

import grails.converters.JSON
import messages.Message

import javax.annotation.PostConstruct

/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
class MessageMarshaller {

    @PostConstruct
    void register() {
        JSON.registerObjectMarshaller(Message) {
            [
                title: it.title,
                body: it.body,
                from: it.from.id,
                to: it.to.id,
                dateCreated: it.dateCreated
            ]
        }
    }
}
