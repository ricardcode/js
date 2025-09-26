/*
*
* Josse Hernandez 2024445
*
*/
function esPrimo(numero) {  
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function ejercicio28() {
    const numero = Number(prompt("Ingresa un número:"));
    const resultado = esPrimo(numero) ? "Es primo" : "No es primo";

    console.log(resultado);
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
