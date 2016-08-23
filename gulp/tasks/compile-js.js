var gulp = require('gulp'),
    _ = require('underscore'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),gl
    bundleLogger = require('./compile-js/bundleLogger'),
    handleErrors = require('./compile-js/handleErrors'),
    del = require('del'),
    config = require('../config'),
    browserifyConfig = config.browserify;

var browserifyTask = function(callback, devMode) {
  var bundleQueue = browserifyConfig.bundleConfigs.length;

  var browserifyThis = function(bundleConfig) {

    if(devMode) {
      _.extend(bundleConfig, watchify.args, { debug: true });
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);
    }

    var b = browserify(bundleConfig);

    var bundle = function() {
      bundleLogger.start(bundleConfig.outputName);

      return b
        .transform('babelify', { presets: ['es2015'] })
        .plugin('browserify-derequire')
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', reportFinished);
    };

    if(devMode) {
      b = watchify(b);
      b.on('update', bundle);
      bundleLogger.watch(bundleConfig.outputName);
    } else {
      if(bundleConfig.require) b.require(bundleConfig.require);
      if(bundleConfig.external) b.external(bundleConfig.external);
    }

    var reportFinished = function() {
      bundleLogger.end(bundleConfig.outputName);

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) {
          callback();
        }
      }
    };

    return bundle();
  };

  browserifyConfig.bundleConfigs.forEach(browserifyThis);
};

gulp.task('browserify', browserifyTask);

gulp.task('dist-js', ['minified-js'], function() {
  del.sync([config.jsDistPath + '/**/*']);

  return gulp.src(config.jsBuildPath + '/*.js')
      .pipe(gulp.dest(config.jsDistPath));
});

gulp.task('minified-js', ['compile-production-js'], function() {
  return gulp.src(config.jsBuildPath + '/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.jsBuildPath));
});

gulp.task('compile-production-js', ['compile-js-templates', 'lint'], function(callback) {
  browserifyTask(callback, false);
});

module.exports = browserifyTask;