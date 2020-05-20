var gulp = require('gulp');
const { jwatch,cwatch,series } = require('gulp');
const uglify=require('gulp-uglify');
const minicss=require('gulp-minify-css');
const Cless=require('gulp-less');
const Jwatcher=jwatch(['src/js/*.js']);
const Cwatcher=cwatch(['src/less/*.less']);
function js(){
	return gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
}
function css(){
	return gulp.src('src/css/*.css')
  .pipe(minicss())
  .pipe(gulp.dest('dist/css'));
}
function less(){
	return gulp.src('src/less/*.less')
  .pipe(Cless())
  .pipe(gulp.dest('src/css'));
}
Jwatcher.on('change',function(path,stats){
	js();
});
Cwatcher.on('change',function(path,stats){
	series(less,css);
});
exports.builderall=series(js,less,css)
exports.JSbuilder=js
exports.CSSbuilder=css
exports.lessbuilder=less