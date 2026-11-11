
const formulario = document.getElementById("tarea");
const campoTitulo = document.getElementById("title");
const contador = document.getElementById("contador");
const vistaPrevia = document.getElementById("vista-previa");
const maximo = 120;

function actualizarContador() {
  const largo = campoTitulo.value.length;
  contador.textContent = `${largo}/${maximo}`;
  contador.classList.toggle("contador-pasado", largo > maximo);
  vistaPrevia.textContent = campoTitulo.value;
}

actualizarContador();
campoTitulo.addEventListener("input", actualizarContador);


// Validar el formulario antes de enviarlo
formulario.addEventListener("submit", (evento) => {
  limpiarErrores(formulario);
  const titulo = campoTitulo.value.trim();

  if (titulo === "") {
    mostrarError(campoTitulo, "Escribe un título: solo con espacios no vale.");
    evento.preventDefault();
  } else if (titulo.length > maximo) {
    mostrarError(campoTitulo, `El título no puede pasar de ${maximo} caracteres.`);
    evento.preventDefault();
  }
});
