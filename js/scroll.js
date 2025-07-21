document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Inicializar AOS (Animate On Scroll)
  AOS.init({
      duration: 1500, // duración en ms
      once: false      // si querés que se animen solo una vez
    });