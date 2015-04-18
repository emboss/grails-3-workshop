package messages

class CsrfFormTagLib {
    // Use this to encode HTML output within your helper methods
    //static defaultEncodeAs = [taglib:'html']

    def csrfForm = { attrs, body ->
        def bodyWithCsrf = """
<input type="hidden" name="${request._csrf.parameterName}" value="${request._csrf.token}"/>
${body()}
"""
        out << g.form(attrs, bodyWithCsrf)
    }
}
