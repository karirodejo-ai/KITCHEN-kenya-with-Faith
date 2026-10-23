(() => {
  const slides = [...document.querySelectorAll('.reference-review-slide')];
  const dots = [...document.querySelectorAll('[data-review-index]')];
  let current = 0;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.classList.toggle('active', i === current); slide.setAttribute('aria-hidden', String(i !== current)); });
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    document.querySelector('#review-position').textContent = `Sample review ${current + 1} of ${slides.length}`;
  }
  dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.reviewIndex))));
  document.querySelector('#next-review').addEventListener('click', () => show(current + 1));
  document.querySelector('#previous-review')?.addEventListener('click', () => show(current - 1));
  show(0);
  document.querySelector('#family-signup').addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('#family-signup-status').textContent = 'Thanks for trying the preview! This form is not connected to an email service. Your email has not been sent or saved. Call Faith at 862-216-3024 for orders and questions.';
    event.currentTarget.reset();
  });
})();

(() => {
  const marquee = document.querySelector('.animated-marquee');
  const control = document.querySelector('.marquee-control');
  control?.addEventListener('click', () => {
    const paused = marquee.classList.toggle('is-paused');
    control.setAttribute('aria-pressed', String(paused));
    control.textContent = paused ? 'Resume scrolling' : 'Pause scrolling';
  });
  const counters = [...document.querySelectorAll('[data-count-target]')];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const frames = new Map();
  function format(el, value) {
    const decimals = Number(el.dataset.countDecimals || 0);
    return value.toLocaleString('en-US', {minimumFractionDigits: decimals, maximumFractionDigits: decimals}) + (el.dataset.countSuffix || '');
  }
  function finishAll() {
    frames.forEach(id => cancelAnimationFrame(id));
    frames.clear();
    counters.forEach(el => { el.textContent = format(el, Number(el.dataset.countTarget)); el.dataset.countDone = 'true'; });
  }
  if (motion.matches || !('IntersectionObserver' in window)) { finishAll(); return; }
  counters.forEach(el => { el.textContent = format(el, 0); });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      observer.unobserve(el);
      if (el.dataset.countDone === 'true') return;
      el.dataset.countDone = 'true';
      const target = Number(el.dataset.countTarget);
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / 2000, 1);
        const value = target * (1 - Math.pow(1 - progress, 3));
        el.textContent = format(el, value);
        if (progress < 1) frames.set(el, requestAnimationFrame(tick));
        else { el.textContent = format(el, target); frames.delete(el); }
      }
      frames.set(el, requestAnimationFrame(tick));
    });
  }, {threshold: .6});
  counters.forEach(el => observer.observe(el));
  motion.addEventListener('change', event => { if (event.matches) { observer.disconnect(); finishAll(); } });
})();

(() => {
  const elements = [...document.querySelectorAll('.benefit-reveal')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, {threshold: .15});
  elements.forEach(el => { el.classList.add('motion-ready'); observer.observe(el); });
  reduced.addEventListener('change', event => {
    if (event.matches) { observer.disconnect(); elements.forEach(el => el.classList.add('in-view')); }
  });
})();

// Copy recipient details only. Payments are completed outside this website.
document.addEventListener('click', async event => {
  const button = event.target.closest('[data-copy-payment]');
  if (!button) return;
  const value = button.dataset.copyPayment;
  const status = button.closest('.payments-section, .checkout-payments')?.querySelector('.payment-status');
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(value);
    if (status) status.textContent = 'Copied ' + value + '. Confirm your order with Faith before paying.';
  } catch {
    if (status) status.textContent = 'Please select and copy these details: ' + value;
  }
});
