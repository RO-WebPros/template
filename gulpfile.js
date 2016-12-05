require('es6-promise').polyfill();
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var plumber       = require('gulp-plumber');
var gutil         = require('gulp-util');
var concat        = require('gulp-concat');
var jshint        = require('gulp-jshint');
var uglify        = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


var onError = function (err) {
  console.log('An error occurred:', gutil.colors.magenta(err.message));
  gutil.beep();
  this.emit('end');
};


gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css'));
});


gulp.task('js', function() {
  return gulp.src(['./js/*.js'])
    .pipe(jshint.reporter('default'))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});


gulp.task('watch', function() {
  browserSync.init({
    files: ['./**/*.php', './**/*.html'],
    proxy: 'http://localhost/template/',
  });
  gulp.watch('./sass/**/*.scss', ['sass', reload]);
  gulp.watch('./js/*.js', ['js', reload]);
});


gulp.task('default', ['sass', 'js', 'watch']);