const { src, dest } = require("gulp");
const { bs } = require("./serv.js");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

function scripts() {
  return src("./src/js/*.js")
    .pipe(uglify())
    .pipe(concat("script.min.js"))
    .pipe(dest("./dist/js"))
    .pipe(bs.reload({ stream: true }));
}

exports.scripts = scripts;
