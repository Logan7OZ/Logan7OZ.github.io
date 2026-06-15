/* ====== Mobile nav toggle ====== */
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

/* ====== Contact form ====== */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (!data.get('nombre') || !data.get('email') || !data.get('mensaje')) {
      status.style.color = '#ff5577';
      status.textContent = 'Por favor completa todos los campos requeridos.';
      return;
    }
    status.style.color = '';
    status.textContent = `¡Gracias ${data.get('nombre')}! Tu mensaje sobre "${data.get('juego')}" fue enviado.`;
    form.reset();
  });
}

/* ====== Confetti generator (used on gta6.html) ====== */
function startConfetti(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const colors = ['#ff006e', '#8338ec', '#3a86ff', '#ffbe0b', '#00ffe7', '#ff2ec4'];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('span');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (3 + Math.random() * 4) + 's';
    c.style.animationDelay = (Math.random() * 5) + 's';
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    c.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
    container.appendChild(c);
  }
}

/* ====== Snow generator (used on wolverine.html) ====== */
function startSnow(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < 90; i++) {
    const s = document.createElement('span');
    s.className = 'snow';
    s.style.left = Math.random() * 100 + 'vw';
    const size = 4 + Math.random() * 8;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.opacity = (0.4 + Math.random() * 0.6).toString();
    s.style.animationDuration = (5 + Math.random() * 7) + 's';
    s.style.animationDelay = (Math.random() * 6) + 's';
    container.appendChild(s);
  }
}

/* Auto-start based on page */
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === 'gta6') startConfetti('particles');
  if (document.body.dataset.page === 'wolverine') startSnow('particles');
});
