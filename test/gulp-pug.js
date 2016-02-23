import test from 'ava';
import es from 'event-stream';
import pug from '../out';
import gulp from 'gulp';
import del from 'del';
import { extname } from 'path';
import { File } from 'gulp-util';

test('file', t => {
  t.plan(1);

  const plugin = pug();

  const dummy = new File({
    path: '/x.pug',
    contents: new Buffer('\nhtml.test\n'),
  });

  plugin.on('data', chunk => {
    t.same(chunk.contents.toString(), '<html class="test"></html>');
  });

  plugin.write(dummy);
});

test.cb('ext', t => {
  del(['test.html']);

  gulp.src('test.pug')
    .pipe(pug())
    .pipe(gulp.dest('.'))
    .on('data', function(file) {
      t.same(file.contents.toString(), '<!DOCTYPE html><html class="foo" lang="en"></html>');
      t.same(extname(file.path), '.html');
      t.end();
    });
});
