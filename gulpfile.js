/**
 * Common Tasks
 *
 * gulp watch - watch files and compile/reload/inject when changes are detected
 * gulp watch --styleguide - same as above, but builds styleguide as well
 * gulp - once-off build of all assets
 * gulp --styleguide - once-off build of all assets including styleguide
 * gulp styles - compile styles
 * gulp styles:watch - watch styles for changes and compile
 * gulp scripts - compile JS
 * gulp scripts:watch - watch JS for changes and compile
 * gulp images - optimise images in /src/images and move to /assets/images
 * gulp wiredep - inject Bower dependencies
 * gulp build-styleguide - build the styleguide with KSS Node
 */

var gulp = require('gulp'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    browserify = require('browserify'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    run = require('gulp-run'),
    source = require('vinyl-source-stream'),
    notify = require('gulp-notify'),
    wiredep = require('wiredep'),
    imagemin = require('gulp-imagemin');

// tasks for when we run `gulp`
var defaultTaskList = ['styles', 'scripts', 'wiredep'];
// tasks for when we run `gulp watch`
var watchTaskList = ['styles:watch', 'scripts:watch', 'browser-sync', 'wiredep:watch'];

// Check if the --styleguide arg was passed
// if so, add 'build-styleguide' to the task lists
if (argv.styleguide) {
  defaultTaskList.push('build-styleguide');
  watchTaskList.push('build-styleguide:watch');
}

/**
 * A once-off, build everything task
 * @param  {string} 'default'  task name
 * @param  {Array}             list of tasks to run
 */
gulp.task('default', defaultTaskList);

// Change the proxy property to suit your domain
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'boilerplate.dev',
    xip: true,
    online: true
  });
});

/**
 * Inject Bower JS dependencies into footer.php
 * @param  {string} 'wiredep' task name
 * @param  {function}
 * @return {void}
 */
gulp.task('wiredep', function() {
  gulp.src('./_footer.php')
    .pipe(wiredep.stream())
    .pipe(gulp.dest('./'));
});

/**
 * Watch bower.json for changes and run 'wiredep' task
 * @param  {string} 'wiredep:watch' task name
 * @param  {function}
 * @return {void}
 */
gulp.task('wiredep:watch', function() {
  gulp.watch('bower.json', ['wiredep']);
});

/**
 * Optimise images in /src/images directory and output into /assets/images
 * @param  {string} 'images'  task name
 * @param  {function}
 */
gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('assets/images'));
});

/**
 * Watch files for changes, and boot up browser-sync
 * @param  {string} 'watch'          task name
 * @param  {Array}                   list of tasks to run
 * @param  {function}
 */
gulp.task('watch', watchTaskList, function() {
  // these are our template files
  // change these when moving to a CMS or other system to reload page on changes
  gulp.watch('**/*.php').on('change', browserSync.reload);
  // when our JS is compiled, reload the browser
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
      .pipe(notify({title: 'JS Compiled!', message: 'Yurt', icon: './src/icon.png'}))
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
        browsers: ['last 5 versions']
    }))
    .pipe(notify({title: 'Styles Compiled!', message: 'Good hustle', icon: './src/icon.png'}))
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

/**
 * Build the styleguide
 * @param  {string} 'styleguide' task name
 * @param  {function}
 */
gulp.task('build-styleguide', function() {
  run('npm run styleguide').exec();
});

/**
 * Watch for changes, and build the styleguide
 * @param  {string} task name
 * @param  {function}
 */
gulp.task('build-styleguide:watch', function() {
  gulp.watch('src/scss/**/*.*', ['build-styleguide']);
});
