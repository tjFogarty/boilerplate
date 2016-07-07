# Boilerplate

## TL;DR
`npm run setup` then run `gulp watch` to run the default task which will launch browsersync and watch assets for changes. Feel free to grab a mug of tea while you wait.

When styles are modified, the styleguide will be updated.
To build the styleguide on it's own, run `npm run styleguide`.

If you're using [Atom](https://atom.io), then you can add this to your Snippets (Atom > Snippets) to build a comment for your styles to translate to the styleguide:

```
'.source.scss':
  'KSS Comment':
    'prefix': 'ksscom'
    'body': '// ${1:Name}\n//\n// ${2:Description}\n//\n// .modifier   - modifier description\n//\n// Markup: ${3:Markup}\n//\n// Style guide: ${4:component.name}\n'
```

You can see the existing files for examples on how it works.

This boilerplate makes heavy use of awesome things done by other people:

* [Normalize.css](http://necolas.github.io/normalize.css/)
* [HTML5 Boilerplate](https://github.com/h5bp)
* [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4)
* [BEM](http://bem.info/) (For a clear explanation, see Extra Material below)
* [KSS Node](https://github.com/kss-node/kss-node)

## Project Config Files

* `.editorconfig` - Most editors pick this up, and it lets you specify a consistent coding styles
* `.eslintrc` - Rules for ESLint
* `.babelrc` - Setup to transpile ES2015 to ES5
* `.bowerrc` - Instructions for Bower
* `.stylelintrc` - Rules for linting Sass/CSS
* `kss-config.json` - Config for creating a styleguide

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
