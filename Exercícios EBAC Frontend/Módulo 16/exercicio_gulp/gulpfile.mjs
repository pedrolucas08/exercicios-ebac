import gulp from "gulp";
import * as sass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import imagemin from "gulp-imagemin";
import uglify from "gulp-uglify";

const compileSass = gulpSass(sass);

export function imageTask() {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"));
}

export function sassTask() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("build/css"));
}

export function scriptsTask() {
  return gulp.src("src/js/*.js").pipe(uglify()).pipe(gulp.dest("build/js"));
}

export function watchTask() {
  gulp.watch("src/images/*", imageTask);
  gulp.watch("src/scss/*.scss", sassTask);
  gulp.watch("src/js/*.js", scriptsTask);
}

export default gulp.series(imageTask, sassTask, scriptsTask, watchTask);
