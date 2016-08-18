var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../config');

gulp.task('lint', function() {
  return gulp.src([
    config.assetPath + '/javascripts/**/*.js',
    '!' + config.assetPath + '/javascripts/templates/**'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

