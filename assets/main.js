// assets/main.js
// Simple enhancements: mobile nav toggle, form validation, and respectful focus management.

(function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.hidden = expanded;
    });
  }

  // Basic client-side validation for required fields
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      const invalid = [...form.querySelectorAll('[required]')].filter(f => !f.value.trim());
      if (invalid.length) {
        e.preventDefault();
        invalid[0].focus();
        const msg = form.querySelector('[data-error]');
        if (msg) {
          msg.textContent = 'Please fill in the required fields.';
          msg.style.color = 'var(--danger)';
        }
      }
    });
  });
})();
