package messages.pages

import geb.Page

class LoginPage extends Page {
    static url = "/login"

    static at = {
        $('input[name=password]').size() > 0
    }

    def login(options) {
        def form  = $('form')
        form.email = options.email
        form.password = options.password
        $('button[type=submit]').click()
    }
}