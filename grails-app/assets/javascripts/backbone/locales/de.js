(function() {

  this.MarionetteApp.Locales = (this.MarionetteApp.Locales || {});

  _.extend(this.MarionetteApp.Locales, {
    de: { translation: {
      message: {
        create: {
          label: 'Neue Nachricht verfassen...'
        },
        list: {
          title: 'Meine Nachrichten'
        },
        title: {
          label: 'Titel'
        },
        from: {
          label: 'Von'
        },
        dateCreated: {
          label: 'Gesendet am'
        },
        emptyList: {
          label: 'Derzeit sind keine Nachrichten für Sie vorhanden.'
        }
      }
    }}
  });
}).call(this);