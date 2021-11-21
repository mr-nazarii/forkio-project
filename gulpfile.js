const { parallel, series } = require("gulp");
const { scripts } = require("./gulp-tasks/scripts.js");
const { styles } = require("./gulp-tasks/styles.js");
const { images, cleanDist } = require("./gulp-tasks/images.js");
const { serv } = require("./gulp-tasks/serv.js");
const { watcher } = require("./gulp-tasks/watcher.js");
const { html } = require("./gulp-tasks/html.js");
const { fonts } = require("./gulp-tasks/fonts");

exports.build = series(
  cleanDist,
  parallel(html, images, styles, scripts, fonts)
);
exports.dev = parallel(serv, watcher);

// exports.default = series(
//   cleanDist,
//   parallel(fonts, styles, images),
//   series(html, scripts),
//   parallel(serv, watcher)
// );

