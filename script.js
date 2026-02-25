// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Create overlay element for mobile nav
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
  overlay.classList.toggle('show');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

overlay.addEventListener('click', function () {
  closeNav();
});

function closeNav() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

// ===== EXPERIENCE FILTER =====
function filterExp(type) {
  const gis = document.querySelector('.exp-gis');
  const k3 = document.querySelector('.exp-k3');
  const buttons = document.querySelectorAll('#experience .exp-filter .exp-btn');

  buttons.forEach(b => b.classList.remove('active'));

  if (type === 'gis') {
    gis.style.display = 'grid';
    k3.style.display = 'none';
    document.querySelector('.gis-toggle').style.display = 'block';
    buttons[0].classList.add('active');
  } else {
    gis.style.display = 'none';
    k3.style.display = 'grid';
    document.querySelector('.gis-toggle').style.display = 'none';
    buttons[1].classList.add('active');
  }
}

// ===== SHOW MORE GIS =====
const gisCards = document.querySelectorAll('#gisGrid .exp-card');
const toggleBtn = document.getElementById('toggleGis');
let expanded = false;

function initGis() {
  gisCards.forEach((card, index) => {
    if (index >= 4) card.style.display = 'none';
  });
}

function toggleGis() {
  expanded = !expanded;
  gisCards.forEach((card, index) => {
    if (index >= 4) card.style.display = expanded ? 'flex' : 'none';
  });
  toggleBtn.textContent = expanded ? 'Sembunyikan' : 'Lihat selengkapnya';
}

// Initialize on page load
initGis();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});