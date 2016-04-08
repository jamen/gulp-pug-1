'use strict';

const test = require('ava');
const pug = require('../lib');
const gulp = require('gulp');
const del = require('del');
const extname = require('path').extname;

test.cb('compiling', t => {
  t.plan(2);
  del(['compiling.html']);

  gulp.src('compiling.pug')
  .pipe(pug())
  .pipe(gulp.dest('.'))
  .on('data', function(file) {
    t.deepEqual(file.contents.toString(),
'<!DOCTYPE html><html class="foo" lang="en"></html>');
    t.is(extname(file.path), '.html');
    t.end();
  });
});
