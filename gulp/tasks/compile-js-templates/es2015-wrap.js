var through = require('through2'),
    PluginError = require('gulp-util').PluginError;

module.exports = function() {
  function wrap(file, encoding, cb) {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new PluginError('es2015-wrap', 'Streaming not supported'));
    }

    try {
      var content = file.contents.toString() + ';export default template;';
      file.contents = Buffer.from(content, encoding);
      this.push(file);
    } catch(e) {
      return cb(new PluginError('es2015-wrap', e));
    }

    cb();
  }

  return through.obj(wrap);
};
