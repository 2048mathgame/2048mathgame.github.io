(function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <a class="logo" href="/" aria-label="2048 Math Game Home">
            <div class="logo-tile" aria-hidden="true">2⁰</div>
            <span>2048 Math Game</span>
          </a>
          <p>The classic sliding tile number puzzle — free to play in your browser. Merge tiles, build your score, reach 2048.</p>
        </div>
        <div class="footer-col">
          <h4>Game</h4>
          <ul>
            <li><a href="/#hero">Play Now</a></li>
            <li><a href="/#how-to-play">How to Play</a></li>
            <li><a href="/#strategies">Strategies</a></li>
            <li><a href="/#controls">Controls</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Learn</h4>
          <ul>
            <li><a href="/#tile-values">Math Behind Tiles</a></li>
            <li><a href="/#math-benefits">Math Benefits</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cookies">Cookies Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} 2048 Math Game · <a href="https://2048mathgame.github.io/">2048mathgame.github.io</a></span>
        <span>Free browser game · No download required · Mobile friendly</span>
      </div>
    </div>`;
})();
