package messages

class Message {

    Long id
    Long version

    User from
    User to
    String title
    String body

    static constraints = {
        title(blank: false)
        body(blank: false)
    }

    static mapping = {
        body(type: 'text')
    }

    String toString() {
        title
    }
}
