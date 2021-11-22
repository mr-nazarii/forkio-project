const { parallel, series } = require("gulp");
const { scripts } = require("./gulp-tasks/scripts.js");
const { styles } = require("./gulp-tasks/styles.js");
const { images, cleanDist } = require("./gulp-tasks/images.js");
const { serv } = require("./gulp-tasks/serv.js");
const { watcher } = require("./gulp-tasks/watcher.js");
const { html } = require("./gulp-tasks/html.js");
const { fonts } = require("./gulp-tasks/fonts");

exports.build = series(cleanDist, html, images, fonts, styles, scripts);
exports.dev = parallel(serv, watcher);

// exports.default = series(
//     cleanDist,
//     parallel(fonts, images),
//     series(html, styles, scripts),
//     parallel(serv, watcher)
// );

