// ========== THEME TOGGLE ==========
(function () {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');

  function apply(mode) {
    if (mode === 'light') {
      body.classList.add('light');
      btn.textContent = '🌞 Light';
      btn.setAttribute('aria-pressed', 'true');
    } else {
      body.classList.remove('light');
      btn.textContent = '🌙 Dark';
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  let saved = localStorage.getItem('theme');
  apply(saved === 'light' ? 'light' : 'dark');

  btn.addEventListener('click', () => {
    const next = body.classList.contains('light') ? 'dark' : 'light';
    apply(next);
    localStorage.setItem('theme', next);
  });
})();

// ========== TYPING ANIMATION ==========
(function () {
  const title = document.getElementById('typing-title');
  const text = "I’m Shraddhesh Dalvi — Java Developer & Software Engineer";
  let index = 0;

  function type() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
})();

// ========== BUBBLES ANIMATION ==========
(function () {
  const heroBubbles = document.getElementById('hero-bubbles');
  for (let i = 0; i < 20; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    let size = Math.random() * 50 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.top = Math.random() * 100 + '%';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = 5 + Math.random() * 5 + 's';
    heroBubbles.appendChild(bubble);
  }
})();

// ========== SLIDER WITH AUTO-PLAY ==========
(function () {
  const slider = document.querySelector('.slider');
  if (slider) {
    const slides = slider.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let index = 0;
    let autoPlay = setInterval(() => showSlide(index + 1), 3000);

    function showSlide(i) {
      if (i < 0) index = images.length - 1;
      else if (i >= images.length) index = 0;
      else index = i;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      clearInterval(autoPlay);
      showSlide(index - 1);
      autoPlay = setInterval(() => showSlide(index + 1), 3000);
    });
    nextBtn.addEventListener('click', () => {
      clearInterval(autoPlay);
      showSlide(index + 1);
      autoPlay = setInterval(() => showSlide(index + 1), 3000);
    });
  }
})();

// ========== SKILL BARS ANIMATION ==========
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target.querySelector('.progress');
        const width = progress.getAttribute('data-width');
        progress.style.setProperty('--width', width);
      }
    });
  });

  document.querySelectorAll('.skill-bar').forEach(bar => observer.observe(bar));
})();

// ========== COUNTERS ANIMATION ==========
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        const element = entry.target;
        let count = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            element.textContent = target;
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(count);
          }
        }, 20);
        observer.unobserve(element);
      }
    });
  });

  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
})();

// ========== FADE-IN ANIMATIONS ==========
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
})();

// ========== BACK TO TOP BUTTON ==========
(function () {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ========== CONTACT FORM HANDLING WITH EMAILJS ==========
(function () {
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.textContent = 'Sending...';
    feedback.style.color = 'var(--accent)';

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form) // Replace with your service and template IDs
      .then(() => {
        feedback.textContent = 'Message sent successfully!';
        feedback.style.color = '#25d366';
        form.reset();
      })
      .catch(() => {
        feedback.textContent = 'Failed to send message. Please try again.';
        feedback.style.color = '#ff0000';
      });
  });
})();

// ========== FOOTER YEAR ==========
(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();