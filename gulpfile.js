var gulp = require('gulp');
var path = require('path');
var babel = require('gulp-babel');

function build() {
  return gulp
          .src(['lib/**/*.js'])
          .pipe(babel({
            optional: ['runtime', 'es7.decorators']
          }))
          .pipe(gulp.dest(__dirname + '/dist'));
}

function watch() {
  gulp.watch(['lib/**/*.js'], ['build']);
  build();
}

gulp.task('build', build);
gulp.task('watch', watch);