const readline = require('readline');
const OperacionesMatematicas = require('./OperacionesMatematicas');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function realizarOperacion() {
  rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
      rl.question('Ingrese la operación (suma, resta, multiplicacion, division): ', (operacion) => {
        const operacionesMatematicas = new OperacionesMatematicas();
        try {
          let resultado;
          switch (operacion) {
            case 'suma':
              resultado = operacionesMatematicas.sumar(parseFloat(num1), parseFloat(num2));
              break;
            case 'resta':
              resultado = operacionesMatematicas.restar(parseFloat(num1), parseFloat(num2));
              break;
            case 'multiplicacion':
              resultado = operacionesMatematicas.multiplicar(parseFloat(num1), parseFloat(num2));
              break;
            case 'division':
              resultado = operacionesMatematicas.dividir(parseFloat(num1), parseFloat(num2));
              break;
            default:
              console.log('Operación no válida');
              rl.close();
              return;
          }
          console.log('Resultado:', resultado);
        } catch (error) {
          console.error('Error:', error.message);
        } finally {
          rl.close();
        }
      });
    });
  });
}

realizarOperacion();
