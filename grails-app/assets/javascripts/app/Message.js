(function(exports) {
  'use strict';

  var Message = function(options) {
    options = (options || {});
    this.el = options.el;
    this.message = options.message;
  };

  _.extend(Message.prototype, {
    show: function() {
      $(this.el).text(this.message);
    }
  });

  exports.Message = Message;

})(app);