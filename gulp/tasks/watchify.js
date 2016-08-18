var gulp = require('gulp'),
    compileJs = require('./compile-js');

require('./compile-js-templates');

gulp.task('watchify', ['compile-js-templates'], function(callback) {
  // Start browserify task with devMode === true
  compileJs(callback, true);
});

