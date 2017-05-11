var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
// define plugins to use with PostCSS
var plugins = [
  autoprefixer(), // browserslist in package.json
  cssnano() // minify css
];
// transform scss/sass files to css
gulp.task("sass", function() {
  // take main scss file
  return gulp.src("src/flexy.scss") // flexy.scss by default
    // transform to css with gulp-sass plugin
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins)) // postprocessing
    .pipe(gulp.dest('dist')); // output to dist folder
});
