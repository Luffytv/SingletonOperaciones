class OperacionesMatematicas {
  static #instancia; // Instancia privada para el Singleton

  constructor() {
    if (!OperacionesMatematicas.#instancia) {
      OperacionesMatematicas.#instancia = this;
    }

    return OperacionesMatematicas.#instancia;
  }

  sumar(num1, num2) {
    return num1 + num2;
  }

  restar(num1, num2) {
    return num1 - num2;
  }

  multiplicar(num1, num2) {
    return num1 * num2;
  }

  dividir(num1, num2) {
    if (num2 === 0) {
      throw new Error('No se puede dividir entre cero');
    }

    return num1 / num2;
  }
}

module.exports = OperacionesMatematicas;
