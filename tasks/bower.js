var gulp    = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('bower', function() {
  gulp.src('./app/views/*.ejs')
    .pipe(wiredep())
    .pipe(gulp.dest('./app/views'));
});