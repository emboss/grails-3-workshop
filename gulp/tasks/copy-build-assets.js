var gulp = require('gulp'),
    merge = require('merge-stream'),
    browserSync = require('browser-sync'),
    config = require('../config');

var copyJs = function() {
  return gulp.src(config.jsBuildPath + '/**/*')
    .pipe(gulp.dest(config.jsDistPath));
};

var copyCss = function() {
  return gulp.src(config.cssBuildPath + '/**/*')
    .pipe(gulp.dest(config.cssDistPath));
};

var copyBuildAssets = function() {
  return merge(copyJs(), copyCss());
};

gulp.task('copy-build-assets', function() {
  return copyBuildAssets()
    .pipe(browserSync.reload({ stream: true }));
});

module.exports = copyBuildAssets;

