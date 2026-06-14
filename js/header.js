(function renderHeader() {
  const nav = [
    { label: 'How to Play', href: '/#how-to-play' },
    { label: 'Math Benefits', href: '/#math-benefits' },
    { label: 'Strategies', href: '/#strategies' },
    { label: 'FAQ', href: '/#faq' },
  ];
  const links = nav.map(n =>
    `<a href="${n.href}">${n.label}</a>`
  ).join('');
 
  document.getElementById('site-header').innerHTML = `
    <div class="container">
      <nav class="header-inner" aria-label="Main navigation">
        <a class="logo" href="/" aria-label="2048 Math Game Home">
          <div class="logo-tile" aria-hidden="true">2⁰</div>
          <span>2048 Math Game</span>
        </a>
        <div class="nav-links" id="nav-links" role="list">${links}</div>
        <a class="btn-play-now" href="#game-anchor" onclick="scrollToGame()">Play Free</a>        
      </nav>
    </div>`;
 
  document.getElementById('nav-toggle').addEventListener('click', function() {
    const nl = document.getElementById('nav-links');
    const open = nl.classList.toggle('open');
    this.setAttribute('aria-expanded', open);
  });
})();
