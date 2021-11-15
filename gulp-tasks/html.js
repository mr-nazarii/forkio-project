const { src, dest } = require("gulp");
const { bs } = require("./serv.js");
const fileinclude = require("gulp-file-include");

function html() {
  return src("./html-files/!(_)*.html")
    .pipe(fileinclude())
    .pipe(dest("./"))
    .pipe(bs.stream());
}

exports.html = html;
