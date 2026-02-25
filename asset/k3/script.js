// Modal functions
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.querySelectorAll('.modal').forEach(function(modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Create overlay element
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when overlay is clicked
overlay.addEventListener('click', function() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});