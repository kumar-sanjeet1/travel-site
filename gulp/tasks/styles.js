var gulp = require('gulp'),
postCss = require('gulp-postcss'),
autopreFixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
 return gulp.src('./app/assets/css/style.css')
     .pipe(postCss([cssImport, mixins, simpleVars, nested, autopreFixer]))
     .on('error', function(errorInfo){
     console.log(errorInfo.toString());
     this.emit('end');
 })
     .pipe(gulp.dest('./app/assets/temp/styles'));
});