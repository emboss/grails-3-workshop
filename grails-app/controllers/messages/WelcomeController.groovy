package messages

class WelcomeController {

    def index() {
        log.info('WelcomeController')
        [name: 'Martin']
    }
}
