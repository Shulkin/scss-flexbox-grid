var path = require("path");
var gulp = require("gulp");
var sass = require("gulp-sass");
// transform scss/sass files to css
gulp.task("sass", function() {
  // take main scss file
  return gulp.src("src/flexy.scss") // flexy.scss by default
    // transform to css with gulp-sass plugin
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest('dist')); // output to dist folder
});
