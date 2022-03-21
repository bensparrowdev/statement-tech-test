const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

function buildStyles() {
	return src('./styles/sass/styles.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer())
		.pipe(purgecss({ content: ['*.html'] }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest('./styles/css'));
}

function watchTask() {
	watch(['./styles/sass/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);

//run "gulp" in the CLI to compile Sass into minified CSS
