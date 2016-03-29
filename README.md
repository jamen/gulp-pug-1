gulp-pug
========
> Gulp plugin for PugJS

## Installation
```shell
$ npm install --save-dev gulp-pug
```

## Usage
```javascript
var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('build', function build() {
  return gulp.src('views/**.pug')
    .pipe(pug(options))
    .pipe(gulp.dest('out'));
});
```

### `pug(options)`
Compile Pug files to HTML files.
 - `options` (`Object`): Any of [Pug's options](https://github.com/pugjs/pug#options) you want to use.

Example:
```javascript
// ...
.pipe(pug({ pretty: true }))
.pipe(gulp.dest(out));
```

## Credits
|![Jamen Marz][jamen-image]|
|:--------:|
| [@jamen] |

## License
[MIT][license] &copy; Jamen Marzonie

<!-- All links must be "tagged" -->
 [@jamen]: https://github.com/jamen
 [jamen-image]: https://avatars2.githubusercontent.com/u/6251703?v=3&s=125

 [license]: LICENSE
