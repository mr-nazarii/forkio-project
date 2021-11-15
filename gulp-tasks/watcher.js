const { watch, parallel } = require("gulp");
const { scripts } = require("./scripts.js");
const { styles } = require("./styles.js");
const { images } = require("./images.js");
const { html } = require("./html.js");
const { bs } = require("./serv.js");

function bsReload() {
  return bs.reload();
}

function watcher() {
  watch("./html-files/*.html").on("change", html);
  watch("*.html").on("change", parallel(html, bsReload));
  watch("./src/js/*.js").on("change", parallel(scripts));
  watch("./src/styles/*.scss").on("change", parallel(styles));
  watch("./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}").on(
    "change",
    parallel(images)
  );
}

exports.watcher = watcher;
