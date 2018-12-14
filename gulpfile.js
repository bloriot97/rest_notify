const gulp = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// eslint-disable-next-line arrow-body-style
gulp.task('html', () => {
  return gulp.src('website/src/html/*.html')
    .pipe(gulp.dest('website/dist/'));
});

// eslint-disable-next-line arrow-body-style
gulp.task('css', () => {
  return gulp.src('website/src/less/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('website/dist/css'));
});

// eslint-disable-next-line arrow-body-style
gulp.task('js', () => {
  return gulp.src('website/src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('website/dist/js'));
});

gulp.task('default', ['html', 'css', 'js']);
