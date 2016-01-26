# Boilerplate

## TL;DR
`npm install` then run `npm run watch` to run the default task which will launch browsersync and watch assets for changes.

Build scripts are location in the `bin` folder, so you can change the `sync` task to include your own development url.

This makes heavy use of awesome things done by other people:

* [Normalize.css](http://necolas.github.io/normalize.css/)
* [HTML5 Boilerplate](https://github.com/h5bp)
* [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)
* [BEM](http://bem.info/) (For a clear explanation, see Extra Material below)

## Files

* `.editorconfig` - Most editors pick this up, and it lets you specify a consistent coding styles
* `.eslintrc` - Rules for ESLint

## Folders

### Public
* `assets/css` - Compiled CSS
* `assets/images`
* `assets/lib` - Typically vendor files that aren't part of the asset pipeline
* `assets/scripts` - compiled JavaScript

### Source
* `src/scripts/` - JavaScript files/modules
* `src/scss/` - Sass files, see the `main.scss` file for structure information

## Extra Material

* [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)
