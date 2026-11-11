function limpiarErrores(formulario) {
  for (const campo of formulario.querySelectorAll(".is-invalid")) {
    campo.classList.remove("is-invalid");
  }

  for (const aviso of formulario.querySelectorAll(".invalid-feedback")) {
    aviso.remove();
  }
}

function mostrarError(campo, mensaje) {
  campo.classList.add("is-invalid");
  const aviso = document.createElement("div");
  aviso.classList.add("invalid-feedback");
  aviso.textContent = mensaje;
  campo.parentElement.appendChild(aviso);
}
