// Place your Spring DSL code here
beans = {
    springSecurityAuthenticationManager(messages.auth.AuthenticationManager)
    customMessageMarshaller(messages.marshallers.MessageMarshaller)
}
