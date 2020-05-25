var gulp = require('gulp');
const watcher =require('gulp-watch'),
 { jwatch,cwatch,series } = require('gulp'),
  uglify=require('gulp-uglify'),
   minicss=require('gulp-minify-css'),
   Cless=require('gulp-less');
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
function jwatcher(){
	gulp.watch('src/js/*.js',{ events:'change'},js);
}
function cwatcher(){
	gulp.watch('src/less/*.less',{ events:'change'},series(less,css));
}

exports.builderall=series(js,less,css)
exports.JSbuilder=js
exports.CSSbuilder=series(less,css);
exports.cwatbuild=cwatcher;
exports.jwatbuild=jwatcher;
//Jwatcher.close()
//Cwatcher.close()
