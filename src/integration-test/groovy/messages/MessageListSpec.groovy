package messages

import geb.spock.GebSpec
import grails.test.mixin.integration.Integration
import grails.transaction.Rollback
import messages.pages.*

/**
 * See the API for {@link grails.test.mixin.support.GrailsUnitTestMixin} for usage instructions
 */
@Integration
@Rollback
class MessageListSpec extends GebSpec {

    private static final EMAIL = 'user@example.com'
    private static final PASSWORD = '1234'
    private static final MESSAGE_TITLE = 'Hello User!'

    def setup() {
    }

    def cleanup() {
    }

    void "signing up and logging in"() {
        when: "I try to go to the messages page directly"
            via MessageListPage

        then: "I am being redirected to the login page"
            at LoginPage

        when: "I go to the sign up page and register"
            to SignupPage
            page.createUser(
                firstName: 'Martin',
                lastName: 'Boßlet',
                email: EMAIL,
                password: PASSWORD
            )

        then: "I am redirected to the login page"
          at LoginPage

        when: "I enter my credentials and submit them"
            page.login(email: EMAIL, password: PASSWORD)
            report "logged in"

        then: "I am authenticated and redirected to the message list page"
            at MessageListPage


    }
}
