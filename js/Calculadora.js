"use strict";
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            return "Error: No se puede dividir por cero";
        }
        return a / b;
    }
}
// Obtener referencias a los elementos del DOM
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");
const btnCalcular = document.getElementById("calcular");
// Crear una instancia de la calculadora
const calc = new Calculadora();
// Función para realizar el cálculo y limpiar los inputs
btnCalcular.addEventListener("click", () => {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);
    let res = "Operación no válida";
    switch (operacion.value) {
        case "sumar":
            res = calc.sumar(valor1, valor2);
            break;
        case "restar":
            res = calc.restar(valor1, valor2);
            break;
        case "multiplicar":
            res = calc.multiplicar(valor1, valor2);
            break;
        case "dividir":
            res = calc.dividir(valor1, valor2);
            break;
    }
    // Mostrar resultado en el párrafo
    resultado.textContent = `Resultado: ${res}`;
    // Limpiar los campos de entrada después del cálculo
    num1.value = "";
    num2.value = "";
});
