import through from 'through2';
import pug from 'pug';
import { dirname, join } from 'path';
import { PluginError, replaceExtension } from 'gulp-util';
import { _extend as extend } from 'util';

export default function gulpPug(base = {}) {
  base = (typeof base !== 'undefined' ? base : {});
  return through.obj(function stream(file, enc, callback) {
    let error = null;

    // Prepare new file.
    const html = file.clone();
    html.path = replaceExtension(html.path, '.html');

    // Create options for pug.
    const opts = extend({
      filename: file.path
    }, base);

    // Replace contents
    if (html.isBuffer()) {
      html.contents = new Buffer(pug.render(file.contents.toString(), opts));
    } else {
      error = new PluginError('gulp-pug', 'Unsupported file content');
    }

    // Continue
    callback(error, html);
  });
};
