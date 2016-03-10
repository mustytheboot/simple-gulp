var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var package = 'public/';

gulp.task('styles', function() {
  gulp.src('./src/scss/**/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({basename: 'style', suffix: '.min'}))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest(package + 'css'));
});

gulp.task('scripts', function() {
  gulp.src(['./src/js/**/*.js'])
    .pipe(concat('script.min.js'))
    //NOTE: Uglify won't work with ES6/7
    .pipe(uglify())
    .pipe(gulp.dest(package + 'js'));
});

gulp.task('html', function() {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest(package));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/scss/**/*.scss', ['styles']);
  gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', function() {
  gulp.start('styles', 'scripts', 'html', 'watch');
});
