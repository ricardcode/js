/*
*
* Josse Hernandez 2024445
*
*/
function ejercicio11() {
    let numeros = "";
    for (let i = 1; i <= 100; i++) {
        console.log(i);
        numeros += i + " ";
    }
    document.getElementById("resultado").innerText = numeros;
}