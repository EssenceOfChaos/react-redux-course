let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('default', ['sass', 'sass:watch'], function() {
	console.log('Default task starting...');
});

gulp.task('sass', function() {
	return gulp
		.src('./public/scss/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./public/scss/**/*.scss', ['sass']);
});
