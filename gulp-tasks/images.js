const { src, dest } = require("gulp");
const { bs } = require("./serv.js");
const imagemin = require("gulp-imagemin");
const del = require("del");

function images() {
  return src("./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}")
    .pipe(
      imagemin({
        progressive: true,
        svgiPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest("./dist/img"))
    .on("end", bs.reload);
}

function cleanDist() {
  return del("dist");
}

exports.images = images;
exports.cleanDist = cleanDist;
