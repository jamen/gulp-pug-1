import through from 'through2';
import pug from 'pug';

export default function gulpPug(opts = {}) {
  return through.obj(function stream(original, enc, callback) {
    const file = original.clone();

    if (file.isBuffer()) {
      const contents = pug.compile(file.contents.toString(), opts)(opts.locals);
      file.contents = new Buffer(contents);
    }

    callback(null, file);
  });
};
