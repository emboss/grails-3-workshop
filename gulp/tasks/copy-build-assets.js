var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config');

var copyBuildAssets = function() {
  return gulp.src(config.buildPath + '/**/*')
    .pipe(gulp.dest(config.distPath));
};

gulp.task('copy-build-assets', function() {
  return copyBuildAssets()
    .pipe(browserSync.reload({ stream: true }));
});

module.exports = copyBuildAssets;

