import test from 'ava';
import es from 'event-stream';
import pug from '../out';
import gulp from 'gulp';
import { File } from 'gulp-util';

test('single file', t => {
  t.plan(1);

  const plugin = pug();

  const dummy = new File({
    contents: new Buffer('\nhtml.test\n'),
  });

  plugin.on('data', chunk => {
    t.same(chunk.contents.toString(), '<html class="test"></html>');
  });

  plugin.write(dummy);
});
