
var gulp = require ('gulp');
var imagemin = require ('gulp-imagemin');

gulp.task('imagemin', function(){
    gulp.src('./frontend-nanodegree-mobile-portfolio-master/frontend-nanodegree-mobile-portfolio-master/img/**/*.{jpg,jpeg,png,gif,bmp,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('./frontend-nanodegree-mobile-portfolio-master/img/**/*'))}
);

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('minify-css', function () {
    gulp.src('./css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});
