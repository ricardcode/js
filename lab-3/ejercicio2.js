/*
*
* Josse Hernandez 2024445
*
*/
function ejercicio2() {
    const edad = Number(prompt("Ingresa tu edad:"));
    let mensaje = "";

    if (edad >= 18) {
        mensaje = "Eres mayor de edad.";
    } else {
        mensaje = "Eres menor de edad.";
    }

    console.log(mensaje);
    document.getElementById("resultado").innerText = mensaje;
}
