<?php include('_header.php'); ?>


  <div class="row">
    <div class="column small-12 medium-6">
      <article>
        <header>
          <h2>Instructions</h2>
        </header>
        <section>

          <h3>Setup</h3>

          <p>In your command line, run <code>npm run setup</code> and give it a few minutes.</p>

            <h3>Gulp tasks:</h3>

            <ul>
                <li><code>gulp watch</code> - watch files and compile/reload/inject when changes are detected</li>
                <li><code>gulp watch --styleguide</code> - same as above, but builds styleguide as well</li>
                <li><code>gulp</code> - once-off build of all assets</li>
                <li><code>gulp --styleguide</code> - once-off build of all assets including styleguide</li>
                <li><code>gulp styles</code> - compile styles</li>
                <li><code>gulp styles:watch</code> - watch styles for changes and compile</li>
                <li><code>gulp scripts</code> - compile JS</li>
                <li><code>gulp scripts:watch</code> - watch JS for changes and compile</li>
                <li><code>gulp critical</code> - generates critical css for pages specified in gulpfile.js</li>
                <li><code>gulp images</code> - optimise images in /src/images and move to /assets/images</li>
                <li><code>gulp wiredep</code> - inject Bower dependencies</li>
                <li><code>gulp build-styleguide</code> - build the styleguide with KSS Node</li>
            </ul>

            <p>If you're using <a href="https://atom.io">Atom</a>, then you can add this to your Snippets (Atom &gt; Snippets) to build a comment for your styles to translate to the styleguide:</p>

            <pre>
                <code>
                '.source.scss':
                  'KSS Comment':
                    'prefix': 'ksscom'
                    'body': '// ${1:Name}\n//\n// ${2:Description}\n//\n// .modifier   - modifier description\n//\n// Markup: ${3:Markup}\n//\n// Style guide: ${4:component.name}\n'
                </code>
            </pre>

            <p>You can see the existing files for examples on how it works.</p>

            <p>This boilerplate makes heavy use of awesome things done by other people:</p>

            <ul>
                <li>
                    <a href="http://necolas.github.io/normalize.css/">Normalize.css</a>
                </li>
                <li>
                    <a href="https://github.com/h5bp">HTML5 Boilerplate</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=1OKZOV-iLj4">ITCSS</a>
                </li>
                <li>
                    <a href="http://bem.info/">BEM</a> (For a clear explanation, see Extra Material below)</li>
                <li>
                    <a href="https://github.com/kss-node/kss-node">KSS Node</a>
                </li>
            </ul>

            <h2>Project Config Files</h2>

            <ul>
                <li>
                    <code>.editorconfig</code> - Most editors pick this up, and it lets you specify a consistent coding styles. Search for <code>editorconfig</code> and install it for your editor of choice</li>
                <li>
                    <code>.eslintrc</code> - Rules for ESLint
                </li>
                <li>
                    <code>.babelrc</code> - Setup to transpile ES2015 to ES5
                </li>
                <li>
                    <code>.bowerrc</code> - Instructions for Bower
                </li>
                <li>
                    <code>kss-config.json</code> - Config for creating a styleguide
                </li>
            </ul>

            <h2>Folders</h2>

            <h3>Public</h3>

            <ul>
                <li>
                    <code>assets/css</code> - Compiled CSS
                </li>
                <li>
                    <code>assets/images</code>
                </li>
                <li>
                    <code>assets/lib</code> - Typically vendor files that aren't part of the asset pipeline
                </li>
                <li>
                    <code>assets/scripts</code> - compiled JavaScript
                </li>
            </ul>

            <h3>Source</h3>

            <ul>
                <li>
                    <code>src/scripts/</code> - JavaScript files/modules
                </li>
                <li>
                    <code>src/scss/</code> - Sass files, see the <code>main.scss</code> file for structure information
                </li>
            </ul>

            <h2>Extra Material</h2>

            <ul>
                <li>
                    <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">BEM</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=1OKZOV-iLj4">ITCSS</a>
                </li>
                <li>
                    <a href="http://cssguidelin.es/">CSS Guidelines</a>
                </li>
            </ul>

        </section>

      </article>

    </div>

  </div>

<?php include('_footer.php'); ?>
