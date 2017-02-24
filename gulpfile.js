var gulp = require('gulp'),  
    less = require('gulp-less'),  
    browserSync = require('browser-sync'); 

gulp.task('html', function() {
    gulp.src('*.html').pipe(browserSync.stream());
});
gulp.task('styles', function() {
    gulp.src('public/styles/*.*').pipe(browserSync.stream());
});
gulp.task('scripts', function() {
    gulp.src('app/**/*.*')               //需要操作的源文件
        //.pipe(uglify())               //压缩js文件
        //.pipe(concat('app.js'))       //把js文件合并成app.js文件
        //.pipe(gulp.dest('dist/js'))   //把操作好的文件放到dist/js目录下
        .pipe(browserSync.stream());  //文件有更新自动执行
});

gulp.task('serve', function() {  
    browserSync.init({  
        //指定服务器启动根目录  
        server: "./public/"
    });  
    gulp.watch('app/**/*.*', ['scripts']);
    gulp.watch('public/styles/*.*', ['styles']);
    gulp.watch('*.html', ['html']);
}); 