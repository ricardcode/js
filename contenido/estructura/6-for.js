/**
 * 
 *  CICLO FOR -> PARA
 */
let lista =["comer","dormir","code","repetir"];
for (let i = 0; i < lista.length;i++){
   //
    console.log(list[i]);
}

// For of 
let canasta =["manzana","naranjas","uvas","mangos"]
for (fruta of  canasta) {
    console.log(fruta)
}


// For-in
// -> intera sobre las propiedades de un objeto

const canastaDeFrutas = {
    nombre :"manzana",
    precio :5.9,
    tipo:"verde",
    marca :"chanita apples"
}
for (fruta in canastaDeFrutas ) {
console.log(fruta);


}
for (fruta in canastaDeFrutas){
    console.log(`${fruta}:${canastaDeFrutas[fruta]}`)
}





