# Boilerplate

## TL;DR
`npm install && gulp install` then run `gulp` to run the default task which will compile assets. `gulp watch` will run browsersync and watch assets for changes.

You can fire this into a static or CMS based project. Configuration changes are made in `config.js` which have already been given some default values. First thing to change would be the local_url.

Gulp tasks are broken into files located in the tasks folder.

This makes heavy use of awesome things done by other people:

* [Normalize.css](http://necolas.github.io/normalize.css/)
* [HTML5 Boilerplate](https://github.com/h5bp)
* [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)
* [BEM](http://bem.info/) (For a clear explanation, see Extra Material below)

## Files

* `.bowerrc` - Sets the location of your Bower dependencies
* `.editorconfig` - Most editors pick this up, and it lets you specify a consistent coding styles
* `.jshintrc` - Rules for JSHint
* `config.js` - Configuration for Gulp tasks

## Folders

* `assets/css` - Compiled CSS, and IE Stylesheet
* `assets/fonts` - Can be icon fonts
* `assets/images`
* `assets/lib` - Default Bower components location
* `assets/scripts` - JavaScript, see `main.js` for recommended structuring of files
* `assets/scss` - Sass, see `main.scss` for recommended structuring of files

## Extra Material

* [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)