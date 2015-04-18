package messages.pages

import geb.Page

class SignupPage extends Page {
    static url = "/signup"

    static at = {
        $('input[name=password]').size() > 0 &&
        $('input[name=firstName]').size() > 0
    }

    def createUser(options) {
        def form  = $('form')
        form.firstName = options.firstName
        form.lastName = options.lastName
        form.email = options.email
        form.password = options.password
        $('button[type=submit]').click()
    }
}