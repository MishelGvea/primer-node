class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: No se puede dividir por cero";
        }
        return a / b;
    }
}

// Obtener referencias a los elementos del DOM
const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;
const operacion = document.getElementById("operacion") as HTMLSelectElement;
const btnCalcular = document.getElementById("calcular") as HTMLButtonElement;

// Crear una instancia de la calculadora
const calc = new Calculadora();

// Función para realizar el cálculo y limpiar los inputs
btnCalcular.addEventListener("click", () => {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);
    let res: number | string = "Operación no válida";

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
