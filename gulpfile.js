const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');



function CompilarSASS() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function MinificarJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function MinificarIMG() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function Observer() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(CompilarSASS));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(MinificarJS));
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(MinificarIMG));
}

exports.default = Observer;