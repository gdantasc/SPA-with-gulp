const gulp = require("gulp");
const webserver = require("gulp-webserver");
const watch = require("gulp-watch");

function servidor() {
  return gulp.src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
}

function monitorFiles() {
  return watch("src/**/*.html", () => gulp.series("appHTML")());
}

module.exports = {
  monitorFiles,
  servidor,
};
