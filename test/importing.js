'use strict';

const test = require('ava');
const pug = require('../lib');
const gulp = require('gulp');
const del = require('del');

test.cb('importing', t => {
  t.plan(1);
  del(['importing.html']);

  gulp.src('importing.pug')
  .pipe(pug())
  .pipe(gulp.dest('.'))
  .on('data', function(file) {
    t.deepEqual(file.contents.toString(),
'<!DOCTYPE html><html><body><p>Hello!</p><p>Hello World</p></body></html>');
    t.end();
  });
});
