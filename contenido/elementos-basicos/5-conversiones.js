/**
 * 
 * conversiones -> Explicitas y implicitas
 */

//conversion explicit type Casting
const string = "34"
const integer = parseInt(string) //34

console.log(string)
console.log(integer)

const float = parseFloat("3.14") 
console.log(typeof float) // number

const binario = "1010"//10 
const decimal = parseInt(binario, 2)
console.log(decimal)

const hexa = "CAFE" 
const hexadecimal = parseInt(hexa, 16)
console.log(decimalhex ) 

//conversion implicit 
const respuesta = "3" + 5 // 8
console.log(typeofrespuesta)

const sumaConBooleano ="3"+true // "3true"
console.log(sumaConBooleano)

const sumaConNumero = 2 + true 
console.log(sumaConNumero) //4

const valorString = "20"
const valorNumer = 10
const valorBoolean = true

console.log(valorString+valorString)
console.log(valorString+valorString)
console.log(valorString+valorBoolean)

console.log(valorNumer+valorNumer)
console.log(valorNumer+valorBoolean)
console.log(valorNumer+valorBoolean)

console.log(valorBoolean+valorBoolean)
console.log(valorBoolean+valorNumer)
console.log(valorBoolean+valorString)






