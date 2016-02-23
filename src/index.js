import through from 'through2';
import pug from 'pug';
import { join, basename } from 'path';
import { PluginError } from 'gulp-util';

export default function gulpPug(opts = {}) {
  return through.obj(function stream(original, enc, callback) {
    let error = null;
    let contents = null;

    if (original.isBuffer()) {
      contents = pug.compile(original.contents.toString(), opts)(opts.locals);
    } else {
      error = new PluginError('gulp-pug', 'Unsupported file content');
    }

    const file = original.clone({
      contents: new Buffer(contents),
      extname: '.html',
    });
    callback(error, file);
  });
};
