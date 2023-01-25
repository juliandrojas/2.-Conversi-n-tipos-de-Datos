//Number to string
let numero = 13;
console.log("Valor variable tipo number: "+numero);
console.log(numero);
let cadena = numero.toString();
console.log("Valor variable tipo cadena: "+cadena);
console.log(cadena);
//Number to boolean
if(1) {
    console.log("Los números positivos son convertidos a verdadero");
}
//El número 0 se considera como falso
if(0) {
    console.log("El cero es convertido a verdadero");
}
if(-1) {
    console.log("Los números negativos son convertidos a verdadero");
}
//Number to bigInt
let greatInt = BigInt(numero);
console.log("Variable greatEnter: ");
console.log(greatInt);
//BigInt to String
cadena = greatInt.toString();
console.log("BigInt to String: ");
console.log(cadena);
//String to number
cadena = "1024";
numero = parseInt(cadena);
console.log("String to number");
console.log(numero);
//Error NaN (no se puede convertir una cadena de texto en un número)
//NaN (Not a Number)
cadena = "Hola Mundo";
numero = parseInt(cadena);
console.log("String to number con error NaN: ");
console.log(numero);
//String to BigInt
cadena = '2048';
greatInt = BigInt(cadena);
console.log("String to BigInt");
console.log(greatInt);
//String to BigInt (Error)
/*
cadena = 'No Number Here';
greatInt = BigInt(cadena);
console.log("String to BigInt");
console.log(greatInt);
*/
//String to boolean
if('') {
    console.log("Una cadena vacía toma como valor: verdadero")
}
//Cadena toma como valor falso (No se muestra)
if('Hola Mundo') {
    console.log("Una cadena no vacía toma como valor: verdadero")
}