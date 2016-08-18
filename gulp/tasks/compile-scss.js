var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon'),
    del = require('del'),
    config = require('../config');

gulp.task('compile-scss', function() {
  return gulp.src(config.assetPath + '/stylesheets/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: bourbon.with([
        config.assetPath + '/stylesheets',
        config.bootstrapPath,
        config.fontawesomePath
      ]),
      errLogToConsole: true
    }).on('error', sass.logError))
    .pipe(gulp.dest(config.buildPath + '/css'));
});

gulp.task('dist-scss', function() {
  del.sync([config.distPath + 'css/**/*']);

  return gulp.src(config.buildPath + '/css/*.css')
    .pipe(gulp.dest(config.distPath + '/stylesheets'));
});

