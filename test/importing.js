import test from 'ava';
import es from 'event-stream';
import pug from '../out';
import gulp from 'gulp';
import del from 'del';
import { extname } from 'path';
import { File } from 'gulp-util';

test.cb('importing', t => {
  del(['importing.html']);

  gulp.src('importing.pug')
  .pipe(pug())
  .pipe(gulp.dest('.'))
  .on('data', function(file) {
    t.same(file.contents.toString(), '<!DOCTYPE html><html><body><p>Hello!</p><p>Hello World</p></body></html>');
    t.same(extname(file.path), '.html');
    t.end();
  });
});
