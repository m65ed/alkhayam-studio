const header = document.querySelector('.site-header');
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const revealItems = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-count]');
const glow = document.querySelector('.cursor-glow');
const heroSlides = document.querySelectorAll('.hero-bg img');
const galleryTrack = document.querySelector('.gallery-track');
const prevBtn = document.querySelector('.gallery-btn.prev');
const nextBtn = document.querySelector('.gallery-btn.next');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      if (entry.target.hasAttribute('data-count')) animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

revealItems.forEach(item => observer.observe(item));
counters.forEach(counter => observer.observe(counter.closest('.reveal') || counter));

function animateCounter(el) {
  const target = Number(el.dataset.count);
  let current = 0;
  const duration = 1200;
  const stepTime = Math.max(16, duration / target);
  const timer = setInterval(() => {
    current += Math.ceil(target / 40);
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, stepTime);
}

if (glow) {
  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

let currentSlide = 0;
if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
  }, 4500);
}

function scrollGallery(direction) {
  if (!galleryTrack) return;
  const amount = galleryTrack.clientWidth * 0.85;
  galleryTrack.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

prevBtn?.addEventListener('click', () => scrollGallery(-1));
nextBtn?.addEventListener('click', () => scrollGallery(1));
