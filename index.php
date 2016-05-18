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
            Once you've cloned the repo, run <code>npm run setup</code> and all dependencies will be installed.
          </p>

          <p>
            Available tasks:
          </p>

          <ul>
            <li>
              <code>gulp watch</code> - you can change your project URL by changing the <code>proxy</code> property on the browser-sync task in <code>gulpfile.js</code>
            </li>

            <li>
              <code>gulp styles</code> and <code>gulp styles:watch</code>
            </li>

            <li>
              <code>gulp scripts</code> and <code>gulp scripts:watch</code>
            </li>
          </ul>
        </section>
      </article>
    </div>

  </div>


<?php include('_footer.php'); ?>
