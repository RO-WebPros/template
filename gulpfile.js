require('es6-promise').polyfill();
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var plumber       = require('gulp-plumber');
var gutil         = require('gulp-util');
// var concat        = require('gulp-concat');
// var uglify        = require('gulp-uglify');
var jshint        = require('gulp-jshint');
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
  .pipe(jshint())
    .pipe(jshint.reporter('default'))
<<<<<<< HEAD
//     .pipe(concat('script.js'))
//     .pipe(uglify())
=======
    // .pipe(concat('script.js'))
    // .pipe(uglify())
>>>>>>> b3bf3f735b71d336735417bffe8f16d9bd5a7b3b
    .pipe(gulp.dest('./js'))
});


gulp.task('watch', function() {
  browserSync.init({
    files: ['./**/*.php', './**/*.html'],
<<<<<<< HEAD
    proxy: 'http://localhost:81',
    port:80,
=======
    proxy: 'http://localhost/template/',
>>>>>>> b3bf3f735b71d336735417bffe8f16d9bd5a7b3b
  });
  gulp.watch('./sass/**/*.scss', ['sass', reload]);
  gulp.watch('./js/*.js', ['js', reload]);
});


gulp.task('default', ['sass', 'js', 'watch']);