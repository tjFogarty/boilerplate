<?php include('_header.php'); ?>


  <div class="o-layout__item u-12-12@small u-8-12@medium">

    <article class="c-article">

      <header class="c-article__header">
        <h2 class="c-article__title">Elements</h2>
      </header>

      <section class="c-article__block">

        <a class="js-jh-toggle" data-jh-id="test">Click me</a>
        <a class="js-jh-toggle" data-jh-id="another">Or me</a>

        <div id="test">
          <ul class="tabs" data-tabs id="example-tabs">
            <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
            <li class="tabs-title"><a href="#panel2">Tab 2</a></li>
          </ul>

          <div class="tabs-content" data-tabs-content="example-tabs">
            <div class="tabs-panel is-active" id="panel1">
              <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
            </div>
            <div class="tabs-panel" id="panel2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div id="another">
          <p>
            Another one
          </p>
        </div>

        <h3 class="c-article__sub-title">Headings</h3>

        <h1>Heading 1</h1>

        <h2>Heading 2</h2>

        <h3>Heading 3</h3>

        <h4>Heading 4</h4>

        <h5>Heading 5</h5>

        <h6>Heading 6</h6>

      </section>

    </article>

  </div>


<?php include('_footer.php'); ?>
