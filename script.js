const root = document.documentElement;
const body = document.body;
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const yearElement = document.querySelector('#current-year');

// Keep the footer year current automatically.
yearElement.textContent = new Date().getFullYear();

// Add a translucent background to the navigation after scrolling.
const updateHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 18);
};
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Mobile navigation.
const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  navLinks.classList.remove('open');
  body.classList.remove('menu-open');
};

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  navLinks.classList.toggle('open', !isOpen);
  body.classList.toggle('menu-open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 880) closeMenu();
});

// Theme preference: remember the user's choice; otherwise use system preference.
let savedTheme = null;
try {
  savedTheme = localStorage.getItem('portfolio-theme');
} catch (error) {
  // Storage can be unavailable in strict privacy modes; the site still works.
}
root.dataset.theme = savedTheme || 'dark';

const updateThemeLabel = () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
  themeToggle.setAttribute('title', `Switch to ${nextTheme} theme`);
};
updateThemeLabel();

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch (error) {
    // Ignore storage errors and keep the theme change for the current visit.
  }
  updateThemeLabel();
});

// Reveal content as it enters the viewport.
const revealItems = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

// Highlight the navigation link for the section currently in view.
const sections = document.querySelectorAll('main section[id]');
const navigationAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationAnchors.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach((section) => sectionObserver.observe(section));
}
