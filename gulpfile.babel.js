// Dependencies =================================
    import gulp from 'gulp';
    import sourcemaps from 'gulp-sourcemaps';
    //import gutil from 'gulp-util';
    
    //import { argv } from 'yargs';
    import notify from 'gulp-notify';
    import prettyTime from 'pretty-hrtime';
    import gulpif from 'gulp-if';
    import connect from 'gulp-connect';
    import handlebars from 'gulp-compile-handlebars';
    import rename from 'gulp-rename'

    //== SASS
    import sass from 'gulp-sass';
    import combinemq from 'gulp-combine-mq';
    import cssnano from 'gulp-cssnano';

    //== JS
    import browserify from 'browserify';
    import watchify from 'watchify';
    import babelify from 'babelify';
    import uglify from 'gulp-uglify';
    import eslint from 'gulp-eslint';
    import source from 'vinyl-source-stream';
    import buffer from 'vinyl-buffer';
    import glob from 'glob';
    import path from 'path';


    var browserSync = require('browser-sync').create();
    

    // Static Server + watching scss/html files
    gulp.task('serve', ['sass'], function() {

        browserSync.init({
            server: "./public"
        });

        gulp.watch("dev/js/**/*.js", ['browserify']);
        gulp.watch("dev/scss/*.scss", ['sass']);
        gulp.watch("public/*.html").on('change', browserSync.reload);
    });

    // Compile sass into CSS & auto-inject into browsers
    gulp.task('sass', function() {
        return gulp.src("dev/scss/*.scss")
            .pipe(sass())
            .pipe(sourcemaps.init())
            .pipe(cssnano())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('public/css'))
            .pipe(browserSync.stream());
    });


// Main Tasks ===================================

gulp.task('browserify', function() {
  var bundler = browserify('index.js')
    return browserify({ entries: ['dev/js/master.js'] })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('main.bundled.js'))
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
});

    //gulp.task('default', ['connect',  'sass', 'browserify', 'watch']); //'html',
gulp.task('default', ['serve']);