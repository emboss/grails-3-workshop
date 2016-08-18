var gulp = require('gulp'),
    del = require('del'),
    copyBuildAssets = require('./copy-build-assets'),
    config = require ('../config');

require('./copy-fonts');
require('./copy-images');
require('./compile-scss');
require('./watch');

gulp.task('default', ['initial-compile-and-copy']);

gulp.task('initial-compile-and-copy', [
  'copy-fonts',
  'copy-images',
  'compile-scss',
  'watch'
], function() {
  del.sync([config.distPath + '/**/*']);
  return copyBuildAssets();
});

