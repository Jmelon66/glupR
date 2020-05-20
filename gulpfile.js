var gulp = require('gulp')
var uglify=require('gulp-uglify')
var minicss=require('gulp-minigy-css')
gulp.task('script',()=>{
	return gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
})