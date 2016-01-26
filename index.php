<?php include('_header.php'); ?>


  <div class="row">
    <div class="column small-12 medium-6 medium-offset-3">

      <article>

        <header>
          <h2>Instructions</h2>
        </header>

        <section>
          <h3>Installation</h3>

          <p>
            Once you've cloned the repo, run <code>npm install</code> and all dependencies will be installed.
          </p>

          <p>
            Have a look at the <code>package.json</code> file and you will see the list of tasks that are available.
          </p>

          <p>
            Running <code>npm run watch</code> will run the <code>watch:js</code>, <code>watch:js</code>, and <code>sync</code>.
          </p>

          <p>
            You can change the sync settings by editing the file in <code>bin/watch</code>.
          </p>
        </section>

        <section>
          <h3>Adding dependencies</h3>

          <p>
            If you wish to persist a dependency to the project, you can use either of the following:
          </p>

          <ul>
            <li>
              <code>npm install jquery --save</code>
            </li>

            <li>
              <code>npm install node-sass --save-dev</code>
            </li>
          </ul>

          <p>
            <code>--save-dev</code> should be reserved for development dependencies, e.g. build tools like Sass or Browserify.
          </p>
        </section>

      </article>
    </div>

  </div>


<?php include('_footer.php'); ?>
