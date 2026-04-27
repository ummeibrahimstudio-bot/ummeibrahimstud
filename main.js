<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Umme Ibrahim Studio — Islamic Kids Books & Cards</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<style>
  /* ── HOME-ONLY STYLES ── */
  .categories-strip {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 3rem 2rem 1rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .cat-card {
    flex: 1;
    min-width: 160px;
    max-width: 200px;
    background: white;
    border-radius: 16px;
    border: 1px solid rgba(184,146,42,0.15);
    padding: 1.8rem 1.2rem;
    text-align: center;
    text-decoration: none;
    color: var(--dark);
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
  }

  .cat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(90,60,20,0.12);
    border-color: var(--gold);
  }

  .cat-icon { font-size: 2.4rem; }

  .cat-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .cat-sub {
    font-size: 0.72rem;
    color: var(--muted);
    line-height: 1.4;
  }

  /* Featured products strip */
  .home-section-heading {
    text-align: center;
    padding: 2rem 1rem 0;
  }

  .home-section-heading h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.6rem, 4vw, 2.3rem);
    color: var(--dark);
    font-weight: 700;
  }

  .home-section-heading h2 span { color: var(--gold); }

  .home-section-heading p {
    color: var(--muted);
    font-size: 0.88rem;
    margin-top: 0.3rem;
  }

  .view-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 1rem;
    padding: 10px 24px;
    border-radius: 30px;
    border: 1.5px solid var(--gold);
    color: var(--gold);
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
  }

  .view-all-btn:hover {
    background: var(--gold);
    color: white;
  }

  /* Trust badges */
  .trust-bar {
    background: var(--dark);
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,0.75);
    font-size: 0.83rem;
  }

  .trust-item span:first-child { font-size: 1.4rem; }

  /* Testimonials */
  .testimonials {
    background: var(--cream);
    padding: 3.5rem 2rem;
    text-align: center;
  }

  .testimonials h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    color: var(--dark);
    margin-bottom: 0.4rem;
    font-weight: 700;
  }

  .testimonials h2 span { color: var(--gold); }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
    max-width: 900px;
    margin: 2rem auto 0;
  }

  .testimonial-card {
    background: white;
    border-radius: 14px;
    padding: 1.5rem;
    border: 1px solid rgba(184,146,42,0.12);
    text-align: left;
    box-shadow: 0 2px 12px rgba(90,60,20,0.06);
  }

  .stars { color: var(--gold); font-size: 0.9rem; margin-bottom: 0.5rem; }
  .testimonial-text { font-size: 0.85rem; color: var(--text); line-height: 1.65; margin-bottom: 0.8rem; font-style: italic; }
  .testimonial-name { font-size: 0.75rem; font-weight: 600; color: var(--muted); letter-spacing: 0.05em; text-transform: uppercase; }

  /* Instagram CTA */
  .instagram-cta {
    background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
    padding: 3rem 2rem;
    text-align: center;
    color: white;
  }

  .instagram-cta h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .instagram-cta p { opacity: 0.85; font-size: 0.9rem; margin-bottom: 1.5rem; }

  .instagram-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: white;
    color: #833ab4;
    padding: 12px 26px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .instagram-btn:hover { transform: scale(1.04); }
</style>
</head>
<body>

<!-- ── HEADER ── -->
<header>
  <a href="index.html" class="logo-wrap">
    <span class="logo-name">Umme Ibrahim Studio</span>
    <span class="logo-tagline">Islamic Kids Books & Cards</span>
  </a>
  <nav>
    <a href="index.html" class="active">Home</a>
    <a href="shop.html">Shop</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
  </nav>
  <button class="hamburger" onclick="toggleNav()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</header>

<!-- Mobile Nav -->
<div class="mobile-nav" id="mobileNav">
  <a href="index.html" class="active">🏠 Home</a>
  <a href="shop.html">🛍️ Shop</a>
  <a href="blog.html">📖 Blog</a>
  <a href="contact.html">📬 Contact</a>
</div>

<!-- ── HERO ── -->
<section class="hero">
  <div class="hero-bismillah">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
  <h1>Nurturing <span>Little Muslim</span> Hearts<br>Through Learning & Play</h1>
  <p>Handcrafted Islamic books, flash cards, and charts — designed to raise a screen-free, faith-filled generation. All India delivery available.</p>
  <div class="delivery-badge">📦 Physical Delivery Across All India &nbsp;·&nbsp; 💬 Order via WhatsApp</div>
</section>

<!-- ── CATEGORIES ── -->
<div class="categories-strip">
  <a href="shop.html#books" class="cat-card">
    <span class="cat-icon">📚</span>
    <span class="cat-label">Books</span>
    <span class="cat-sub">Islamic story & activity books for kids</span>
  </a>
  <a href="shop.html#flashcards" class="cat-card">
    <span class="cat-icon">🃏</span>
    <span class="cat-label">Flash Cards</span>
    <span class="cat-sub">Learn Dua, emotions, pillars & more</span>
  </a>
  <a href="shop.html#charts" class="cat-card">
    <span class="cat-icon">📜</span>
    <span class="cat-label">Charts</span>
    <span class="cat-sub">Wall charts for daily Islamic learning</span>
  </a>
  <a href="blog.html" class="cat-card">
    <span class="cat-icon">✍️</span>
    <span class="cat-label">Blog</span>
    <span class="cat-sub">Parenting tips & Islamic learning ideas</span>
  </a>
</div>

<!-- ── FEATURED PRODUCTS ── -->
<div class="home-section-heading" style="margin-top:1rem;">
  <h2>Our <span>Bestsellers</span></h2>
  <p>Loved by families across India</p>
</div>

<div class="products" style="max-width:1200px;">

  <!-- PRODUCT 1: Prophet Ibrahim Book — Real Image -->
  <div class="card" data-category="books">
    <div class="card-image book-cover">
      <img src="images/book_ibrahim.png" alt="Prophet Ibrahim — Search for Allah" style="width:100%;height:240px;object-fit:cover;">
      <div class="card-badge">Book</div>
    </div>
    <div class="card-body">
      <div class="card-category">Islamic Story Book</div>
      <div class="card-title">Prophet Ibrahim — Search for Allah</div>
      <div class="card-age">👶 Age 3–8 years &nbsp;·&nbsp; 📖 Illustrated Story Book</div>
      <div class="card-desc">A beautifully illustrated story of Prophet Ibrahim (AS) and his search for Allah — written to plant the seed of tawheed in little hearts. Also available on Amazon!</div>
      <div class="card-topics">
        <span class="topic-tag">Tawheed</span>
        <span class="topic-tag">Prophet's Story</span>
        <span class="topic-tag">Illustrated</span>
      </div>
    </div>
    <div class="card-footer">
      <div class="price">₹249 <small>Physical Book</small></div>
      <a class="btn-buy" href="https://wa.me/918444968880?text=Assalamu%20Alaikum!%20I%20want%20to%20order%3A%0A%0AProduct%3A%20Prophet%20Ibrahim%20%E2%80%94%20Search%20for%20Allah%0APrice%3A%20%E2%82%B9249%0A%0APlease%20share%20delivery%20details.%20JazakAllah%20Khair%20%F0%9F%99%8F" target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Order on WhatsApp
      </a>
    </div>
  </div>

  <!-- PRODUCT: Feelings Flash Cards — Real Image -->
  <div class="card" data-category="flashcards">
    <div class="card-image">
      <img src="images/emotions_flashcards.jpg" alt="Feelings & Emotions Flash Cards" style="width:100%;height:240px;object-fit:cover;">
      <div class="card-badge">Flash Cards</div>
    </div>
    <div class="card-body">
      <div class="card-category">Emotions & Feelings</div>
      <div class="card-title">Feelings & Emotions Flash Cards</div>
      <div class="card-age">👶 Age 2–6 years &nbsp;·&nbsp; 🃏 Set of 15 Cards</div>
      <div class="card-desc">Beautifully designed Islamic-themed flash cards that help children recognise and understand different emotions. Makes it easy for kids to express themselves.</div>
      <div class="card-topics">
        <span class="topic-tag">Emotions Recognition</span>
        <span class="topic-tag">Communication Skills</span>
        <span class="topic-tag">Islamic Theme</span>
      </div>
    </div>
    <div class="card-footer">
      <div class="price">₹99 <small>Set of 15 Cards</small></div>
      <a class="btn-buy" href="https://wa.me/918444968880?text=Assalamu%20Alaikum!%20I%20want%20to%20order%3A%0A%0AProduct%3A%20Feelings%20%26%20Emotions%20Flash%20Cards%0APrice%3A%20%E2%82%B999%0A%0APlease%20share%20delivery%20details.%20JazakAllah%20Khair%20%F0%9F%99%8F" target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Order on WhatsApp
      </a>
    </div>
  </div>

  <!-- PRODUCT: Daily Duas Flash Cards — Real Image -->
  <div class="card" data-category="flashcards">
    <div class="card-image">
      <img src="images/duas_flashcards.jpg" alt="My First Daily Dua Cards" style="width:100%;height:240px;object-fit:cover;">
      <div class="card-badge">Flash Cards</div>
    </div>
    <div class="card-body">
      <div class="card-category">Daily Duas</div>
      <div class="card-title">My First Daily Dua Cards</div>
      <div class="card-age">👶 Age 2–7 years &nbsp;·&nbsp; 🃏 10+ Dua Cards</div>
      <div class="card-desc">Beautiful dua cards with Arabic text, transliteration and English meaning. Builds a daily dua habit from an early age — covering after eating, bathroom duas, dua for knowledge and more.</div>
      <div class="card-topics">
        <span class="topic-tag">Daily Duas</span>
        <span class="topic-tag">Arabic Text</span>
        <span class="topic-tag">Transliteration</span>
      </div>
    </div>
    <div class="card-footer">
      <div class="price">₹149 <small>10+ Dua Cards</small></div>
      <a class="btn-buy" href="https://wa.me/918444968880?text=Assalamu%20Alaikum!%20I%20want%20to%20order%3A%0A%0AProduct%3A%20My%20First%20Daily%20Dua%20Cards%0APrice%3A%20%E2%82%B9149%0A%0APlease%20share%20delivery%20details.%20JazakAllah%20Khair%20%F0%9F%99%8F" target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Order on WhatsApp
      </a>
    </div>
  </div>

</div>

<div style="text-align:center;padding-bottom:3rem;">
  <a href="shop.html" class="view-all-btn">View All Products →</a>
</div>

<!-- ── TRUST BAR ── -->
<div class="trust-bar">
  <div class="trust-item"><span>📦</span><span>All India Delivery</span></div>
  <div class="trust-item"><span>💬</span><span>WhatsApp Support</span></div>
  <div class="trust-item"><span>🌙</span><span>100% Islamic Values</span></div>
  <div class="trust-item"><span>✅</span><span>Handcrafted with Love</span></div>
  <div class="trust-item"><span>👶</span><span>Age-Appropriate Content</span></div>
</div>

<!-- ── TESTIMONIALS ── -->
<section class="testimonials">
  <h2>What <span>Families</span> Say</h2>
  <p style="color:var(--muted);font-size:0.88rem;margin-top:0.3rem;">Alhamdulillah — loved by little ones across India</p>
  <div class="testimonials-grid">
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <div class="testimonial-text">"My 4-year-old loves the Dua flashcards! She recites her morning duas every day now. The quality is amazing for the price. JazakAllah Khair!"</div>
      <div class="testimonial-name">Fatima A. — Mumbai</div>
    </div>
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <div class="testimonial-text">"The feelings flash cards are such a thoughtful product. My son can now name his emotions in an Islamic context. Highly recommend to every Muslim parent."</div>
      <div class="testimonial-name">Umm Yusuf — Bangalore</div>
    </div>
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <div class="testimonial-text">"Excellent packaging, fast delivery and beautiful cards! My daughter carries the Dua book everywhere. So glad I found this page on Instagram."</div>
      <div class="testimonial-name">Hana K. — Hyderabad</div>
    </div>
  </div>
</section>

<!-- ── INSTAGRAM CTA ── -->
<section class="instagram-cta">
  <h2>📸 Follow Us on Instagram</h2>
  <p>Get parenting tips, new product previews, and Islamic learning ideas for your little ones</p>
  <a href="https://instagram.com/ummeibrahim.studio" target="_blank" class="instagram-btn">
    @ummeibrahim.studio
  </a>
</section>

<!-- ── HOW TO ORDER ── -->
<section class="how-section">
  <h2>How to Order</h2>
  <p>Simple, fast, and friendly — just 3 easy steps</p>
  <div class="steps">
    <div class="step">
      <div class="step-num">1</div>
      <p>Click <strong style="color:var(--gold-light)">"Order on WhatsApp"</strong> on any product you like</p>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <p>A pre-filled message with the product name will open in WhatsApp automatically</p>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <p>Send the message — we will reply with payment & delivery details within 24 hours</p>
    </div>
  </div>
  <div style="margin-bottom:1rem;color:rgba(255,255,255,0.55);font-size:0.82rem;">📦 Physical delivery available across all of India</div>
  <a class="whatsapp-cta" href="https://wa.me/918444968880?text=Assalamu%20Alaikum!%20I%20want%20to%20know%20more%20about%20your%20products.%20JazakAllah%20Khair%20%F0%9F%99%8F" target="_blank">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
    Chat with Us on WhatsApp
  </a>
</section>

<!-- ── FOOTER ── -->
<footer>
  <div class="footer-links">
    <a href="blog.html">📖 Blog</a>
    <a href="https://instagram.com/ummeibrahim.studio" target="_blank">📸 Instagram</a>
    <a href="https://wa.me/918444968880" target="_blank">💬 WhatsApp</a>
    <a href="https://beacons.ai/ummeibrahim.studio" target="_blank">🔗 Link in Bio</a>
    <a href="contact.html">📬 Contact</a>
  </div>
  <p style="margin-bottom:0.4rem;">© 2026 Umme Ibrahim Studio &nbsp;·&nbsp; by Alisha Naz</p>
  <p style="font-size:0.72rem;opacity:0.6;">Raising a Screen-Free Little Ummah &nbsp;·&nbsp; All India Delivery Available</p>
</footer>

<script src="main.js"></script>
</body>
</html>
