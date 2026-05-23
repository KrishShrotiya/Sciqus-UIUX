document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme based on localStorage or system preference
  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeToggleBtn.innerHTML = '☀️';
    } else {
      themeToggleBtn.innerHTML = '🌙';
    }
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.innerHTML = '☰';
    });
  });

  // Navbar Scroll Effect (Glassmorphism)
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Stats Counter Animation
  const statsElements = document.querySelectorAll('.stat-number');
  let statsStarted = false;

  const startStatsCounter = () => {
    if (statsStarted) return;
    statsStarted = true;

    statsElements.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000; // ms
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.innerText = Math.ceil(current) + (stat.getAttribute('data-suffix') || '');
          requestAnimationFrame(updateCounter);
        } else {
          stat.innerText = target + (stat.getAttribute('data-suffix') || '');
        }
      };
      updateCounter();
    });
  };

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startStatsCounter();
        statsObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
  }

  // IntersectionObserver Fallback for Scroll Reveals (if CSS view() isn't supported)
  if (!CSS.supports('(animation-timeline: view())')) {
    const revealElements = document.querySelectorAll('.product-card, .hero-image');
    revealElements.forEach(el => el.classList.add('js-reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.js-reveal').forEach(el => revealObserver.observe(el));
  }

  // Hover-based Features deep dive interaction
  const featureItems = document.querySelectorAll('.feature-item');
  const visualItems = document.querySelectorAll('.visual-item');
  
  if (featureItems.length > 0 && visualItems.length > 0) {
    featureItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const index = item.getAttribute('data-index');
        
        // Update active text
        featureItems.forEach(f => f.classList.remove('active'));
        item.classList.add('active');
        
        // Update active visual
        visualItems.forEach(v => v.classList.remove('active'));
        const targetVisual = document.querySelector(`.visual-item[data-index="${index}"]`);
        if (targetVisual) targetVisual.classList.add('active');
      });
    });
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      
      btn.innerText = 'Sending...';
      btn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        btn.innerText = 'Message Sent!';
        btn.style.backgroundColor = '#10b981'; // Green
        btn.style.borderColor = '#10b981';
        contactForm.reset();
        
        setTimeout(() => {
          btn.innerText = originalText;
          btn.disabled = false;
          btn.style.backgroundColor = '';
          btn.style.borderColor = '';
        }, 3000);
      }, 1500);
    });
  }

  // Mouse tracking for glowing cards
  document.getElementById('products').onmousemove = e => {
    for(const card of document.getElementsByClassName("product-card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  };
});
