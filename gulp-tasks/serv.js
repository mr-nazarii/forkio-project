const browserSync = require("browser-sync").create();

function serv() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    browser: "chrome",
  });
}

exports.serv = serv;
exports.bs = browserSync;
