'use strict';

var gulp   = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
  gulp.src('./src/predicate.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/'));
});
