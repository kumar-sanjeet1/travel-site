var gulp = require('gulp'),
watch = require('gulp-watch'),
postCss = require('gulp-postcss'),
autopreFixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function(){
 console.log("You done something Awesome!");
});

gulp.task('html', function(){
   console.log("HTML"); 
});
gulp.task('styles', function(){
 return gulp.src('./app/assets/css/style.css')
     .pipe(postCss([cssImport, simpleVars, nested, autopreFixer]))
     .pipe(gulp.dest('./app/assets/temp/styles'));
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});

gulp.task('watch', function(){
    watch('./app/assets/css/**/*.css', function(){
        gulp.start('styles');
    });
});