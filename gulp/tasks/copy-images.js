var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    del = require('del'),
    config = require('../config');

var copyImages = function() {
  return gulp.src(config.assetPath + '/images/**/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant]
    }))
    .pipe(gulp.dest(config.imageDistPath));
};

gulp.task('copy-images', function() {
  return copyImages();
});

gulp.task('dist-images', function() {
  del.sync([config.imageDistPath + '/**/*']);

  return copyImages();
});

