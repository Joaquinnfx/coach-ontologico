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

  const form = document.getElementById("form-contacto");
  const estado = document.getElementById("estadoMensaje");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      estado.innerText = "¡Mensaje enviado!";
      form.reset();
    } else {
      estado.innerText = "Error al enviar. Probá más tarde.";
    }
  });