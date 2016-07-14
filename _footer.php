        </main>

        <footer role="contentinfo">
        <div class="row">
          <div class="column">
            <p>
              &copy; 2016
            </p>
          </div>
        </div>

        </footer>

        <!-- bower:js -->
        <script src="assets/lib/jquery/dist/jquery.js"></script>
        <script src="assets/lib/what-input/what-input.js"></script>
        <script src="assets/lib/foundation-sites/dist/foundation.js"></script>
        <script src="assets/lib/tota11y/build/tota11y.js"></script>
        <!-- endbower -->

        <script src="/assets/scripts/main.bundle.js"></script>

        <!-- Service Worker example - see sw.js in project root -->
        <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
            // registration worked
            console.log('Registration succeeded. Scope is ' + reg.scope);
          }).catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error);
          });
        }
        </script>
    </body>
</html>
