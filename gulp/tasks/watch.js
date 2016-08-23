var gulp = require('gulp'),
    config = require('../config');

require ('./browser-sync');
require ('./compile-scss');
require ('./copy-build-assets');
require ('./watchify');

gulp.task('watch', ['watchify', 'browser-sync'], function() {
  // Watchify will take care of JS, so no need to watch it here
  gulp.watch([config.assetPath + '/stylesheets/**/*.scss'], ['compile-scss']);
  // Recompile the client-side JS templates
  gulp.watch([config.assetPath + '/templates/**/*.pug'], ['compile-js-templates']);
  // When assets are built, we copy them to the static resource directory
  gulp.watch([config.buildPath + '/**/*'], ['copy-build-assets']);
});
