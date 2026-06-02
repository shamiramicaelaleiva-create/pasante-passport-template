const montoInput = document.querySelector('#monto');

const personasInput = document.querySelector('#personas');

const propinaInput = document.querySelector('#propina');

const btn = document.querySelector('#calcular');

const resultado = document.querySelector('#resultado');

btn.addEventListener('click', () => {

  const monto = parseFloat(montoInput.value);

  const personas = parseFloat(personasInput.value);

  const propina = parseFloat(propinaInput.value);

  if (monto <= 0 || personas < 1) {

    resultado.textContent = 'Datos invalidos';

    return;
  }

  const totalPropina = monto * (propina / 100);

  const total = monto + totalPropina;

  const porPersona = total / personas;

  resultado.textContent =
    'Total: $' + total.toFixed(2) +
    ' | Por persona: $' + porPersona.toFixed(2);

});