const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

exports.default = () => (
    gulp.src('assets/uploads/*')
        .pipe(imagemin(
            [pngquant({quality: [0.5, 0.5]})]
        ))
        .pipe(gulp.dest('assets/uploads/'))
);