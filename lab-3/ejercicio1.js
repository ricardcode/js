/*
*
* Josse Hernandez 2024445
*
*/
function ejercicio1() {
    const numero = Number(prompt("Ingresa un número:"));
    let resultado = "";

    if (numero > 0) {
        resultado = "Positivo";
    } else if (numero < 0) {
        resultado = "Negativo";
    } else {
        resultado = "Cero";
    }

    console.log(resultado);
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
