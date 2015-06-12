'use strict';

var gulp               = require('gulp'),
    connect            = require('gulp-connect'),
    jshint             = require('gulp-jshint'),
    stylish            = require('jshint-stylish'),
    inject             = require('gulp-inject'),
    wiredep            = require('wiredep').stream,
    concat             = require('gulp-concat'),
    uglify             = require('gulp-uglify'),
    ngAnnotate         = require('gulp-ng-annotate'),
    templateCache      = require('gulp-angular-templatecache'),
    gulpif             = require('gulp-if'),
    minifyCss          = require('gulp-minify-css'),
    uncss              = require('gulp-uncss'),
    useref             = require('gulp-useref');


gulp.task('server', function() {
    connect.server({
        root: './',
        hostname: '0.0.0.0',
        port: 8080
    });
});

gulp.task('server-dist', function() {
    connect.server({
        root: './dist',
        hostname: '0.0.0.0',
        port: 8080
    });
});  
   
// Inject into HTML the path of JS scripts and CSS files
gulp.task('inject', function() {
    var sources = gulp.src(['./client/app/**/*.js', './client/css/style.css']);
    return gulp.src('index.html')
    .pipe(inject(sources, {
        read: false
    }))
    .pipe(gulp.dest('./'));
});

// Inject the path of Bower dependencies into HTML
gulp.task('wiredep', function() {
    gulp.src('./index.html')
    .pipe(wiredep({
        directory: './client/lib'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('templates', function() {
    gulp.src('./client/templates/*.html')
    .pipe(templateCache({
        root: 'client/templates/',
        module: 'leave.templates',
        standalone: true
    }))
    .pipe(gulp.dest('./client/app'));
});

gulp.task('compress', function() {
    gulp.src('./index.html')
    .pipe(useref.assets())
    .pipe(gulpif('*.js', uglify({ mangle: false })))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('./dist'));
});

gulp.task('uncss', function() {
    gulp.src('./dist/css/style.min.css')
    .pipe(uncss({
        html: ['./index.html', './client/templates/*.html']
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function() {
    gulp.src('./index.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist'));
    gulp.src('./client/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('watch', function() {
    gulp.watch(['./bower.json'], ['wiredep']);
    
});

// gulp.task('default', ['wiredep', 'inject', 'templates', 'compress', 'copy', 'uncss', 'watch']);

gulp.task('default', ['server', 'templates', 'inject', 'wiredep', 'watch']);
gulp.task('build', ['templates', 'compress', 'copy', 'uncss']);


