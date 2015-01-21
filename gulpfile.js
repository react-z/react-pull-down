var gulp  = require('gulp');
  react = require('gulp-react'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  coffee = require('gulp-coffee'),
  open = require('gulp-open');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.', '.tmp']
  });
});
 
gulp.task('livereload', function() {
  gulp.src(['./*.css', './*.js'])
    .pipe(connect.reload());
});

gulp.task('react', function () {
    return gulp.src('./todo.jsx')
        .pipe(react({
            harmony: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});

/*
gulp.task('less', function() {
  gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('.tmp/styles'));
});
 
gulp.task('coffee', function() {
  gulp.src('scripts/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.tmp/scripts'));
}); 
*/

/*
gulp.task('watch', function() {	
  gulp.watch('styles/*.less', ['less']);
  gulp.watch('scripts/*.coffee', ['coffee']);
})
*/ 

/*
gulp.task('default', ['less', 'coffee', 'webserver', 'livereload', 'watch']);
*/

gulp.task('default', ['webserver', 'livereload', 'react', 'open']);

