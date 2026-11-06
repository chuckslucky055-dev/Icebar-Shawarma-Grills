import './styles.css';

const menu = [
  {
    name: 'Chicken Shawarma',
    description:
      'Grilled chicken wrapped with fresh toppings and signature sauce.',
    price: '₦—',
  },
  {
    name: 'Pepper Chicken',
    description: 'Spiced chicken grilled for a rich, smoky finish.',
    price: '₦—',
  },
  {
    name: 'Grilled Prawns',
    description: 'Seasoned prawns prepared fresh from the grill.',
    price: '₦—',
  },
  {
    name: 'Meat Shawarma',
    description: 'Tender grilled meat with fresh toppings and sauce.',
    price: '₦—',
  },
  {
    name: 'Nkwobi',
    description:
      'A Nigerian favourite featured among popular customer choices.',
    price: '₦—',
  },
  {
    name: 'Mixed Grill',
    description: 'A generous selection of grilled favourites for sharing.',
    price: '₦—',
  },
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App root not found');

app.innerHTML = `
  <header class="nav">
    <a class="brand" href="#home" aria-label="Icebar home">
      <span class="brand-mark">I</span>
      <span>ICEBAR<span class="brand-sub">SHAWARMA & GRILLS</span></span>
    </a>
    <nav class="nav-links">
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#visit">Visit</a>
    </nav>
    <a class="nav-cta" href="tel:+2349013628159">Call to order</a>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">WUSE 2 · ABUJA · OPEN 24 HOURS</p>
        <h1>Grill. Chill.<br><em>Repeat.</em></h1>
        <p class="hero-copy">Shawarma, grills, Nigerian favourites and a relaxed late-night spot in the heart of Wuse.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="tel:+2349013628159">Order by phone</a>
          <a class="button button-ghost" href="#menu">Explore menu</a>
        </div>
        <div class="hero-meta"><span>● Open 24 hours</span><span>42 Adetokunbo Ademola Cres</span></div>
      </div>
      <div class="hero-note">DEMO WEBSITE<br><small>Prepared for Icebar Shawarma & Grills</small></div>
    </section>

    <section class="intro section" id="about">
      <div>
        <p class="eyebrow">THE ICEBAR EXPERIENCE</p>
        <h2>A spot for <em>good food</em> and good company.</h2>
      </div>
      <p class="intro-copy">A polished online home for a 24-hour Wuse 2 food and grill spot. Browse favourites, call to order, and find the restaurant without digging through social media.</p>
    </section>

    <section class="menu-section section" id="menu">
      <div class="section-head">
        <div><p class="eyebrow">FAVOURITES</p><h2>From the grill</h2></div>
        <span class="demo-pill">Demo menu · prices to be confirmed</span>
      </div>
      <div class="menu-grid">
        ${menu
          .map(
            item => `
          <article class="menu-card">
            <div class="menu-number">0${menu.indexOf(item) + 1}</div>
            <div><h3>${item.name}</h3><p>${item.description}</p></div>
            <strong>${item.price}</strong>
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section class="feature section">
      <div class="feature-card">
        <p class="eyebrow">WHY PEOPLE COME BACK</p>
        <h2>Late-night cravings?<br><em>We've got you.</em></h2>
        <p>Directory listings and recent reviews describe Icebar as a 24-hour spot with delivery, takeaway and a mix of grills, shawarma and Nigerian dishes.</p>
        <a href="tel:+2349013628159" class="text-link">Call 0901 362 8159 →</a>
      </div>
      <div class="stat-card"><span>24/7</span><p>Listed opening hours</p></div>
    </section>

    <section class="visit section" id="visit">
      <div class="visit-copy">
        <p class="eyebrow">FIND US</p>
        <h2>Right in<br><em>Wuse 2.</em></h2>
        <p>42 Adetokunbo Ademola Crescent, Wuse, Abuja 904101, Federal Capital Territory, Nigeria.</p>
        <div class="visit-actions">
          <a class="button button-primary" href="https://www.google.com/maps/search/?api=1&query=Icebar%20Shawarma%20%26%20Grills%2C%2042%20Adetokunbo%20Ademola%20Cres%2C%20Abuja" target="_blank" rel="noreferrer">Get directions</a>
          <a class="button button-light" href="tel:+2349013628159">0901 362 8159</a>
        </div>
      </div>
      <div class="map-card"><div class="map-pin">I</div><span>ICEBAR<br><small>WUSE 2 · ABUJA</small></span></div>
    </section>
  </main>

  <footer><span>ICEBAR SHAWARMA & GRILLS</span><span>42 Adetokunbo Ademola Cres, Wuse, Abuja</span><span>© 2026 Demo Concept</span></footer>
`;
