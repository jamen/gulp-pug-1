import through from 'through2';
import pug from 'pug';
import { PluginError } from 'gulp-util';

export default function gulpPug(opts = {}) {
  return through.obj(function stream(original, enc, callback) {
    const file = original.clone();
    let error = null;
    let contents = null;

    if (file.isBuffer()) {
      contents = pug.compile(file.contents.toString(), opts)(opts.locals);
    } else {
      error = new PluginError('gulp-pug', 'Unsupported file content');
    }

    file.contents = new Buffer(contents);
    callback(error, file);
  });
};
