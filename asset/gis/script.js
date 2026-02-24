// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Get filter value
    const filterValue = button.getAttribute('data-filter');
    
    // Filter projects
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filterValue === 'all') {
        card.classList.remove('hidden');
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else if (category === filterValue) {
        card.classList.remove('hidden');
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.classList.add('hidden');
        }, 300);
      }
    });
  });
});

// Modal functionality
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('.project-link');
const modalCloses = document.querySelectorAll('.modal-close');

// Open modal
modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const card = trigger.closest('.project-card');
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(`modal-${modalId}`);
    
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Close modal
modalCloses.forEach(close => {
  close.addEventListener('click', () => {
    const modal = close.closest('.modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Close modal when clicking outside
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach(modal => {
      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards
projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});