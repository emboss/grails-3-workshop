var gulp = require('gulp');

require('./copy-fonts');
require('./copy-images');
require('./compile-scss');
require('./compile-js');

gulp.task('dist', ['dist-fonts', 'dist-images', 'dist-scss', 'dist-js']);

