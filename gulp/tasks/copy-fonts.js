var gulp = require('gulp'),
    del = require('del'),
    config = require('../config');

var copyFonts = function() {
  return gulp.src([
    config.fontawesomeFiles,
    config.assetPath + '/fonts/**/*'
  ]).pipe(gulp.dest(config.fontDistPath));
};

gulp.task('copy-fonts', function() {
  return copyFonts();
});

gulp.task('dist-fonts', function() {
  del.sync([config.fontDistPath + '/**/*']);

  return copyFonts();
});

