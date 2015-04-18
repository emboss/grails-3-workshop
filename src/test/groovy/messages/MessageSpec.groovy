package messages

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Message)
class MessageSpec extends Specification {


    void "valid message should pass validation"() {
        validMessageWith().validate()
    }

    void "title must not be blank"() {
        expect:
            !validMessageWith(title: '').validate()
    }

    void "body must not be blank"() {
        expect:
          !validMessageWith(body: '').validate()
    }

    void "from must not be null"() {
        expect:
          !validMessageWith(from: null).validate()
    }

    void "to must not be null"() {
        expect:
          !validMessageWith(to: null).validate()
    }

    private validMessageWith(args=[:]) {
        def msg = new Message(
            title: 'Message',
            body: 'Body',
            'from.id': 1,
            'to.id': 2
        )
        msg.properties = args
        msg
    }
}
