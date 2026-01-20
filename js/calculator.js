// ================================
// CALCULADORA - LÓGICA
// ================================

const display = document.querySelector(".calc-display");
const buttons = document.querySelectorAll(".calc-btn");

let currentValue = "";
let operator = "";
let previousValue = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Números y punto
        if (!isNaN(value) || value === ".") {
            currentValue += value;
            display.value = currentValue;
            return;
        }

        // Operadores
        if (["+", "−", "×", "÷"].includes(value)) {
            if (currentValue === "") return;

            operator = value;
            previousValue = currentValue;
            currentValue = "";
            return;
        }

        // Igual
        if (value === "=") {
            if (previousValue === "" || currentValue === "") return;

            let result;
            const prev = parseFloat(previousValue);
            const curr = parseFloat(currentValue);

            switch (operator) {
                case "+":
                    result = prev + curr;
                    break;
                case "−":
                    result = prev - curr;
                    break;
                case "×":
                    result = prev * curr;
                    break;
                case "÷":
                    result = curr !== 0 ? prev / curr : "Error";
                    break;
                default:
                    return;
            }

            display.value = result;
            currentValue = result.toString();
            previousValue = "";
            operator = "";
        }
    });
});
