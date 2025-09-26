/*
*
* Josse Hernandez 2024445
*
*/
function ejercicio12() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
        suma += i;
    }

    console.log("Suma de 1 al 50:", suma);
    document.getElementById("resultado").innerText = `Suma total: ${suma}`;
}
