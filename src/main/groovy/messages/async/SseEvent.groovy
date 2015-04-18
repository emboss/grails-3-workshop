package messages.async

import groovy.transform.CompileStatic


/**
 *
 * @author <a href="mailto:Martin.Bosslet@gmail.com">Martin Bosslet</a>
 */
@CompileStatic
class SseEvent {

    public static final String CONTENT_TYPE = 'text/event-stream'

    final String data

    SseEvent(String data) {
        this.data = data
    }

    static SseEvent withData(Object data) {
        new Builder().data(data).build()
    }

    @CompileStatic
    private static class Builder {

        private static final String SEPARATOR = "\n"

        private final StringBuilder data = new StringBuilder()

        Builder comment(String comment) {
            this.data.append(":${normalize(comment)}${SEPARATOR}")
            this
        }

        Builder event(String event) {
            this.data.append("event: ${normalize(event)}${SEPARATOR}")
            this
        }

        Builder id(String id) {
            this.data.append("id: ${normalize(id)}${SEPARATOR}")
            this
        }

        Builder retry(long retryMillis) {
            this.data.append("retry: ${retryMillis}${SEPARATOR}")
            this
        }

        Builder data(Object data) {
            this.data.append("data: ${normalize(data)}${SEPARATOR}")
            this
        }

        SseEvent build() {
            this.data.append(SEPARATOR)
            this.data.append(SEPARATOR)
            new SseEvent(this.data.toString())
        }

        private Object normalize(Object s) {
            s == null ? "" : s
        }
    }

}
