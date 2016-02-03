var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')


gulp.task('js', function () {
  gulp.src(['node_modules/**/*.min.js', 'src/**/module.js', 'src/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('.'))
})

gulp.task('watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})