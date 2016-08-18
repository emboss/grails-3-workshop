var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    wrap = require('./compile-js-templates/es2015-wrap'),
    changed = require('gulp-changed'),
    config = require('../config');

gulp.task('compile-js-templates', function() {
  var dest = config.assetPath + '/javascripts/templates';

  return gulp.src(config.assetPath + '/templates/**/*.pug')
    .pipe(changed(dest))
    .pipe(pug({
      pretty: false,
      debug: false,
      compileDebug: false,
      client: true // compile to JS
    }))
    .pipe(wrap())
    .pipe(gulp.dest(dest));
});

