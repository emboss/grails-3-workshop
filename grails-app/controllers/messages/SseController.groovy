package messages

import grails.converters.JSON
import grails.events.Events
import messages.async.SseEvent

class SseController implements Events {

    private static final EVENT = 'message:created'

    static allowedMethods = [events: "GET"]

    def events() {
        response.contentType = SseEvent.CONTENT_TYPE

        def ctx = startAsync()
        ctx.timeout = 0 // never

        ctx.start {
            on(EVENT) { data ->
                log.info("Received $data")
                def json = data as JSON
                def sse = new SseEvent.Builder()
                    .event(EVENT)
                    .data(json)
                    .build()
                    .data
                ctx.response.outputStream << sse
            }
        }

        ctx
    }

}
