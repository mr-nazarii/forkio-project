const { src, dest } = require("gulp");

function fonts() {
    return src("./src/styles/font/*")
        .pipe(dest("./dist/css/font/"))
}

exports.fonts = fonts;
