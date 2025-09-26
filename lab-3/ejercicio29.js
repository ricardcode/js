/*
*
* Josse Hernandez 2024445
*
*/
function ejercicio29() {
    let input = prompt("Ingresa números separados por comas:");
    let arreglo = input.split(",").map(num => Number(num.trim()));

    arreglo.sort((a, b) => a - b);

    console.log("Arreglo ordenado:", arreglo);
    document.getElementById("resultado").innerText = `Ordenado: ${arreglo.join(", ")}`;
}
