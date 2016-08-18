var nodeModulesPath = './node_modules',
    assetPath = './src/assets',
    buildPath = './build/assets';

module.exports = {
  bootstrapPath: nodeModulesPath + '/bootstrap-sass/assets/stylesheets',
  fontawesomePath: nodeModulesPath + '/font-awesome/scss',
  fontawesomeFiles: nodeModulesPath + '/font-awesome/fonts/*',
  assetPath: assetPath,
  buildPath: buildPath,
  distPath: './grails-app/assets/vendor',
  imageDistPath: './grails-app/assets/images',
  fontDistPath: './grails-app/assets/fonts',
  browserSync: {
    proxy: 'localhost:8080'
  },
  browserify: {
    bundleConfigs: [{
      paths: [assetPath + '/javascripts'],
      entries: assetPath + '/javascripts/application.js',
      dest: buildPath + '/js',
      outputName: 'application.js',
      extensions: ['.js']
    }]
  }
};

