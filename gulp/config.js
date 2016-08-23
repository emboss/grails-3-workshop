var nodeModulesPath = './node_modules',
    assetPath = './src/assets',
    buildPath = './build/assets',
    jsBuildPath = buildPath + '/javascripts/vendor',
    distPath = './grails-app/assets';

module.exports = {
  bootstrapPath: nodeModulesPath + '/bootstrap-sass/assets/stylesheets',
  fontawesomePath: nodeModulesPath + '/font-awesome/scss',
  fontawesomeFiles: nodeModulesPath + '/font-awesome/fonts/*',
  assetPath: assetPath,
  buildPath: buildPath,
  cssBuildPath: buildPath + '/stylesheets/vendor',
  jsBuildPath: jsBuildPath,
  imageDistPath: distPath + '/images',
  fontDistPath: distPath + '/fonts',
  cssDistPath: distPath + '/stylesheets/vendor',
  jsDistPath: distPath + '/javascripts/vendor',
  browserSync: {
    proxy: 'localhost:8080'
  },
  browserify: {
    bundleConfigs: [{
      paths: [assetPath + '/javascripts'],
      entries: assetPath + '/javascripts/application.js',
      dest: jsBuildPath,
      outputName: 'application.js',
      extensions: ['.js']
    }]
  }
};

