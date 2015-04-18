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
                id: it.id,
                title: it.title,
                body: it.body,
                from: [
                    id: it.from.id,
                    email: it.from.email,
                    firstName: it.from.firstName,
                    lastName: it.from.lastName
                ],
                to: [
                    id: it.to.id,
                    email: it.to.email,
                    firstName: it.to.firstName,
                    lastName: it.to.lastName
                ],
                dateCreated: it.dateCreated
            ]
        }
    }
}
