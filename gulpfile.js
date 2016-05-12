var gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    postcss = require('gulp-postcss'),
    cssstats = require('gulp-cssstats'),
    cssreporter = require('postcss-reporter'),
    immutableCSS = require('immutable-css'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin');

// Change the proxy property to suit your domain
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'boilerplate.dev',
    xip: true,
    online: true
  });
});

// Generate CSS stats
gulp.task('cssstats', function() {
  gulp.src('assets/css/main.css')
    .pipe(cssstats())
    .pipe(gulp.dest('./'));
});

gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('assets/images'));
});

gulp.task('check-css', function() {
  return gulp.src('./assets/css/main.css')
    .pipe(postcss([
      immutableCSS({
        strick: true,
        immutablePrefixes: [/\.u\-/, /\.c\-/, /\.o\-/]
      })
    ]));
});

gulp.task('watch', ['styles:watch', 'scripts:watch', 'browser-sync'], function() {
      gulp.watch('**/*.php').on('change', browserSync.reload);
      gulp.watch('./assets/scripts/**/*.js').on('change', browserSync.reload);
});

/**
 * Handle errors
 * @see https://gist.github.com/wesbos/52b8fe7e972356e85b43
 * @return {void}
 */
function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

/**
 * Build scripts
 * @see https://gist.github.com/wesbos/52b8fe7e972356e85b43
 */
function buildScript(file, watch) {
  var props = {
    entries: ['./src/scripts/' + file],
    debug : true,
    transform:  [babelify]
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle(),
        fileName = file.split('.')[0];

    return stream
      .on('error', handleErrors)
      .pipe(source(fileName + '.bundle.js'))
      .pipe(notify('JS Compiled!'))
      .pipe(gulp.dest('./assets/scripts/'));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

/**
 * Build our main.js file
 * @param  {string} 'scripts'
 * @param  {function} callback
 */
gulp.task('scripts', function() {
  return buildScript('main.js', false);
});

/**
 * Watch and build our main.js file
 * @param  {string} 'scripts:watch'
 * @param  {function} callback
 */
gulp.task('scripts:watch', function() {
  return buildScript('main.js', true);
});

/**
 * Compile styles
 * @param  {string} 'styles'
 * @param  {function} callback for the task
 */
gulp.task('styles', function() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', handleErrors))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(notify('Sass Compiled!'))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(browserSync.stream());
});

/**
 * Watch styles and run the 'styles' task on change
 * @param  {string} 'styles:watch'
 * @param  {function} callback
 */
gulp.task('styles:watch', function() {
  gulp.watch('src/scss/**/*.scss', ['styles']);
});
