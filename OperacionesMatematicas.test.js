const OperacionesMatematicas = require('./OperacionesMatematicas');

// Prueba de suma
test('suma dos números', () => {
  const operacionesMatematicas = new OperacionesMatematicas();
  const resultado = operacionesMatematicas.sumar(5, 3);
  expect(resultado).toBe(8);
});

// Prueba de división
test('divide dos números', () => {
  const operacionesMatematicas = new OperacionesMatematicas();
  const resultado = operacionesMatematicas.dividir(15, 3);
  expect(resultado).toBe(5);
});

// Prueba de división por cero
test('lanza un error al intentar dividir por cero', () => {
  const operacionesMatematicas = new OperacionesMatematicas();
  expect(() => {
    operacionesMatematicas.dividir(10, 0);
  }).toThrow('No se puede dividir entre cero');
});

