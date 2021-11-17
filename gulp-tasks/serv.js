const browserSync = require("browser-sync").create();

function serv() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    // browser: "chrome",
    browser: "firefox",

  });
}

exports.serv = serv;
exports.bs = browserSync;
