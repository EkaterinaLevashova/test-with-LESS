var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('less', function () {
    return gulp.src('./src/less/**/*.less')
        .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ],
        compress: true
        }))
        .pipe(gulp.dest('./dist/css'));
    });

gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
}
)

gulp.task('watch', function(callback){
    gulp.watch('./src/less/**/*.less', gulp.series('less'));
    gulp.watch('./src/*.html', gulp.series('html'));
})

gulp.task('default', 
    gulp.series('html', 'less', 'watch')
)