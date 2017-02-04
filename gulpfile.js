let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('styles', () => {
    gulp.src('./public/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'))
});
