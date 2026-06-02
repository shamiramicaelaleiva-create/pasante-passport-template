const input = document.querySelector('#nombre');
const btn = document.querySelector('#saludar');
const out = document.querySelector('#resultado');

btn.addEventListener('click', () => {
  if (input.value === '') {
    out.textContent = 'Por favor escribe tu nombre';
    return;
  }

  out.textContent = 'Hola, ' + input.value + '!';
});
