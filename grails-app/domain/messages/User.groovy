package messages

class User {

    Long id
    Long version

    String firstName
    String lastName
    String email
    String password //this is not secure!!! We'll do this right later

    static hasMany = [messages: Message]

    static constraints = {
        firstName(blank: false)
        lastName(blank: false)
        email(email: true)
        password(blank: false, password: true)
    }

    static mappedBy = [messages: 'to']

    def getFullName() {
        "${firstName} ${lastName}"
    }

    String toString() {
        fullName
    }
}
