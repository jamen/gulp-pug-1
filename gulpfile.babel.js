import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';

gulp.task('default', [ 'clean', 'build' ]);

gulp.task('clean', () => del('out'));

gulp.task('build', [ 'clean' ], () => {
  return gulp.src('src/**.js')
  .pipe(babel())
  .pipe(gulp.dest('out/'));
});
