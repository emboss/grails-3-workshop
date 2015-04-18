(function() {

  this.MarionetteApp.Locales = (this.MarionetteApp.Locales || {});

  _.extend(this.MarionetteApp.Locales, {
    en: { translation: {
      message: {
        create: {
          label: 'Compose new message...'
        },
        list: {
          title: 'My messages'
        },
        title: {
          label: 'Title'
        },
        from: {
          label: 'From'
        },
        dateCreated: {
          label: 'Sent at'
        },
        emptyList: {
          label: 'There are currently no messages for you.'
        }
      }
    }}
  });
}).call(this);
