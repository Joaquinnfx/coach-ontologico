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