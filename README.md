/* ── UMME IBRAHIM STUDIO — SHARED JAVASCRIPT ── */

// ── MOBILE NAV TOGGLE ──
function toggleNav() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}

// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileNav').classList.remove('open');
    });
  });

  // ── CARD SCROLL ANIMATIONS ──
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(card => observer.observe(card));
});

// ── CAROUSEL ──
var carouselIdx = {};

function changeSlide(pid, dir) {
  var c = document.getElementById('carousel-' + pid);
  var slides = c.querySelectorAll('.slide');
  var dots = c.querySelectorAll('.dot');
  if (carouselIdx[pid] === undefined) carouselIdx[pid] = 0;
  carouselIdx[pid] = (carouselIdx[pid] + dir + slides.length) % slides.length;
  updateCarousel(slides, dots, carouselIdx[pid]);
}

function moveSlide(pid, idx) {
  var c = document.getElementById('carousel-' + pid);
  var slides = c.querySelectorAll('.slide');
  var dots = c.querySelectorAll('.dot');
  carouselIdx[pid] = idx;
  updateCarousel(slides, dots, idx);
}

function updateCarousel(slides, dots, idx) {
  slides.forEach(function (s, i) {
    s.style.display = i === idx ? 'block' : 'none';
    s.classList.toggle('active', i === idx);
  });
  dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
}

// ── SHOP FILTER (used on shop page) ──
function filterProducts(category) {
  const cards = document.querySelectorAll('.card[data-category]');
  const btns = document.querySelectorAll('.filter-btn');

  btns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
