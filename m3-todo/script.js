const input = document.getElementById('inputTarea');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');

let tareas = [];

function render() {

  lista.innerHTML = '';

  for (const tarea of tareas) {

    const li = document.createElement('li');

    const texto = document.createElement('span');
    texto.textContent = tarea.texto;

    if (tarea.completada) {
      texto.style.textDecoration = 'line-through';
    }

    texto.addEventListener('click', () => {
      tarea.completada = !tarea.completada;
      render();
    });

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = '❌';

    botonBorrar.addEventListener('click', () => {
      tareas = tareas.filter(t => t !== tarea);
      render();
    });

    li.appendChild(texto);
    li.appendChild(botonBorrar);

    lista.appendChild(li);
  }

  const completadas = tareas.filter(t => t.completada).length;

  contador.textContent =
    `Completadas: ${completadas} de ${tareas.length}`;
}

boton.addEventListener('click', () => {

  const texto = input.value.trim();

  if (texto === '') {
    return;
  }

  tareas.push({
    texto: texto,
    completada: false
  });

  input.value = '';

  render();
});