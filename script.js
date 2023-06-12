// Obtener referencias a los elementos de input
const promparcial1Input = document.getElementById('promparcial1');
const promparcial2Input = document.getElementById('promparcial2');
const promparcial3Input = document.getElementById('promparcial3');
const promordinarioInput = document.getElementById('promordinario');

// Agregar evento input a cada campo de entrada
promparcial1Input.addEventListener('input', validarValor);
promparcial2Input.addEventListener('input', validarValor);
promparcial3Input.addEventListener('input', validarValor);
promordinarioInput.addEventListener('input', validarValor);

// Función para validar el valor ingresado en el campo de entrada
function validarValor(event) {
  const input = event.target;
  const valor = parseFloat(input.value);

  if (valor > 10) {
    input.value = '10';
  }
}

// Obtener referencia al botón de envío
const submitButton = document.querySelector('.submit');

// Obtener referencia al elemento de resultado
const resultadoElement = document.getElementById('resultado');

// Agregar un evento click al botón de envío
submitButton.addEventListener('click', calcularPromedio);

// Función para calcular el promedio y mostrarlo en el HTML
function calcularPromedio() {
  // Obtener los valores de los inputs y convertirlos a números
  const promparcial1 = parseFloat(promparcial1Input.value);
  const promparcial2 = parseFloat(promparcial2Input.value);
  const promparcial3 = parseFloat(promparcial3Input.value);
  const promordinario = parseFloat(promordinarioInput.value);

  // Calcular los resultados multiplicando por los factores
  const resultado =
    promparcial1 * 0.2 +
    promparcial2 * 0.2 +
    promparcial3 * 0.2 +
    promordinario * 0.4;

  // Mostrar el resultado en el HTML
  resultadoElement.textContent = 'El resultado es: ' + resultado;
}
