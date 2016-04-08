import test from 'ava';
import es from 'event-stream';
import pug from '../out';
import gulp from 'gulp';
import del from 'del';
import { extname } from 'path';
import { File } from 'gulp-util';

test.cb('compiling', t => {
  del(['compiling.html']);

  gulp.src('compiling.pug')
  .pipe(pug())
  .pipe(gulp.dest('.'))
  .on('data', function(file) {
    t.same(file.contents.toString(), '<!DOCTYPE html><html class="foo" lang="en"></html>');
    t.same(extname(file.path), '.html');
    t.end();
  });
});
