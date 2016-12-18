var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var gulp = require('gulp');
var sass = require('gulp-sass');

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src([
        './wwwroot'
    ]).pipe(clean());
});

gulp.task('default', ['dependencies', 'ts', 'sass', 'html', 'index']);

gulp.task('watch', ['watch.ts', 'sass:watch', 'html:watch']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('app/**/*.ts', ['ts']);
});

// sass
gulp.task('sass', ["sass:clean"], function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wwwroot/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sass:clean', function(){
    return gulp.src('./wwwroot/css').pipe(clean());
})

// html
gulp.task('html', ['html:clean'], function () {
    return gulp.src([
        './app/**/*.html'
    ]).pipe(gulp.dest('./wwwroot/app'));
})

gulp.task('html:watch', function () {
    gulp.watch('./app/**/*.html', ['html']);
});

gulp.task('html:clean', function(){
    return gulp.src('./wwwroot/app/**/*.html').pipe(clean());
})

// typescript
var tsProject = ts.createProject('app/tsconfig.json');
gulp.task('ts', ['ts:clean'], function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
        "app/**/*.ts"
    ])
        .pipe(tsProject(), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/app'));
});

gulp.task('ts:clean', function(){
    return gulp.src('./wwwroot/app/**/*.js').pipe(clean());
})

gulp.task("dependencies", ['dependencies:clean'], () => {

    // node moodules
    gulp.src(
        [
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js'
        ],
        {
            cwd: "node_modules/**"
        })
        .pipe(gulp.dest("./wwwroot/libs"));

    // bower components
    gulp.src([
        'bower_components/**/*.*'
    ]).pipe(gulp.dest('./wwwroot/libs'));
});

gulp.task('dependencies:clean', function(){
    return gulp.src('./wwwroot/libs').pipe(clean());
})

// index
gulp.task('index', ['index:clean'], function () {
    return gulp.src([
        './app/index.html',
        './app/systemjs.config.js'
    ]).pipe(gulp.dest('./wwwroot'));
})

gulp.task('index:watch', function () {
    gulp.watch([
        './app/index.html',
        './app/systemjs.config.js'
    ], ['index']);
});

gulp.task('index:clean', function () {
    return gulp.src([
        './wwwroot/index.html',
        './wwroot/systemjs.config.js'
    ]).pipe(clean());
})