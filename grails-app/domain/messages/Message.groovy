package messages

class Message {

    Long id
    Long version
    Date dateCreated
    Date lastUpdated

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
        autoTimestamp true
        sort dateCreated: "desc"
    }

    String toString() {
        title
    }
}
