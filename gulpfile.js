/* eslint-env node */
const gulp = require('gulp');
const eslint = require('gulp-eslint');

const js = [
	'./jasmine/spec/*.js',
	'./js/*.js'
];

gulp.task('lint', function() {
	gulp.src(js)
		.pipe(eslint())
		.pipe(eslint.result(result => {
			if (!result.messages.length) {
				return;
			}
			console.log(`ESLint result: ${result.filePath}`);
			result.messages.forEach(function(rs) {
				console.log(`message: ${rs.message} line: ${rs.line}, column: ${rs.column}`);
			});
		}));
});

gulp.task('watch', function() {
	gulp.watch(js, ['lint']);
});