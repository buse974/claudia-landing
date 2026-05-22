document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sticker = document.querySelector('.floating-sticker');
  if (sticker) {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        sticker.classList.add('is-visible');
      } else {
        sticker.classList.remove('is-visible');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
