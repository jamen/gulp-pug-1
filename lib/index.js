'use strict';

const through = require('through2');
const pug = require('pug');
const extend = require('util')._extend;
const gutil = require('gulp-util');
const replaceExtension = gutil.replaceExtension;
const PluginError = gutil.PluginError;

module.exports = function gulpPug(opts) {
  const baseOpts = extend({}, typeof opts === 'undefined' ? {} : opts);

  return through.obj((file, enc, callback) => {
    let error = null;

    // Prepare new file.
    const html = file.clone();
    html.path = replaceExtension(html.path, '.html');

    // Create options for pug.
    const opts = extend({
      filename: file.path
    }, baseOpts);

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
