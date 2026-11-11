async function cargarResumen() {
  const resumen = document.getElementById("resumen");

  if (resumen === null) {
    return;
  }

  const respuesta = await fetch("/api/tasks");
  const tareas = await respuesta.json();
  const pendientes = tareas.filter((tarea) => !tarea.done).length;

  resumen.textContent = `Tienes ${pendientes} tareas pendientes de ${tareas.length}.`;
}

cargarResumen();
