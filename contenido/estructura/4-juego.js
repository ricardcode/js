/*

*/

const numberoSecreto =Math.floor(Math.random()*11 -1)
const numeroJugando = parseInt(prompt("adivina el numero entre el 1 al 10"))
 
console.log(`el numero que ingresaste fue :${numeroJugando}`)
if (numeroJugando === numberoSecreto) {
    console.log("Felicidades adivinaste el numero")
} else if (numeroJugando < numberoSecreto){
    console.log("el numero es mayo")
}else {
    console.log(" el numero es menor ")
}

console.log(`el numero secreto  era:${numberoSecreto}`)