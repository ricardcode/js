/**
 * 
 * 
 * 
 * Funciones -> js -> tipo de datos
 */


function calcularDescuento(precio, porcentajeDescuento){
    const descuento = (precio * porcentajeDescuento)/100;
    const precioFinal = precio - descuento;
    return precioDescuento;
   
   }
   const precioOriginal = 100;
   const porcentajeDescuento = 15;
   const precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
   
   console.log("precio original Q."+precioOriginal);
   console.log("descuento: "+porcentajeDescuento+"%");
   console.log("precio con descuento  Q."+precioFinal);