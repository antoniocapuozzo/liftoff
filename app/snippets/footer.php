<footer class="site-footer" role="contentinfo">
  <div class="site-footer-wrap site-wrap">
    <p>
      <a href="/">Liftoff 🚀 - 1.0</a> - &copy; <?php echo date("Y"); ?>
    </p>
    <div class="theme-switcher">
      <label>
        <span>Light</span>
        <input type="radio" value="light" name="themeSwitcher" id="light" />
      </label>
      <label>
        <span>Dark</span>
        <input type="radio" value="dark" name="themeSwitcher" id="dark" />
      </label>
      <label>
        <span>System</span>
        <input type="radio" value="system" name="themeSwitcher" id="system" />
      </label>
    </div>

  </div>

</footer>

<?php js("theme.js") ?>

<?php js("navigation.js") ?>

<?php js("header.js") ?>

<script>
  const asyncNavigationInstance = new AsyncNavigation();

  const themeSwitcherInstance = new ThemeSwitcher();

  const scrollTrigger = new ScrollTrigger();
</script>

</body>

</html>