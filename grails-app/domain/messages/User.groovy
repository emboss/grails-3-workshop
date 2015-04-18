package messages

class User {

    Long id
    Long version

    String firstName
    String lastName
    String email
    String passwordHash

    static hasMany = [messages: Message]

    static mappedBy = [messages: 'to']

    static constraints = {
        firstName(blank: false)
        lastName(blank: false)
        email(email: true, unique: true)
        passwordHash(blank: false)
    }

    static mapping = {
        email(index: 'user_email')
        passwordHash(index: 'user_password_hash')
    }

    def getFullName() {
        "${firstName} ${lastName}"
    }

    String toString() {
        fullName
    }
}
