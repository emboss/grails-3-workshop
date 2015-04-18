package messages.pages

import geb.Page

class MessageListPage extends Page {
    static url = "/messages"

    static at = {
        $('div.message-index').size() > 0
    }
}