"use strict";
const num1 = 20; // La constante no cambia su valor
let num2 = 10; // Se define tipo de dato
let num3; // No se le asignada un tipo de dato
num2 = 5; // "5",  Error: Type 'string' is not assignable to type 'number'.
num3 = 15;
num3 = "15"; // "15"
num3 = {
    name: "Pikachu",
    vida: 100
}; // {name: "Pikachu"}
// Funcion de tipo de datos string
function mostrar(jugador1, jugador2) {
    console.log(jugador1 + " Compro poder para " + jugador2);
    console.log(jugador2 + ": Gracias, " + jugador1);
}
// Funcion es tipo de dato number
function atacar(daño) {
    console.log("Infligio: " + daño + " de daño al enemigo");
}
//Funcion de tipo de dato booleano
function murio(activo) {
    activo = false;
    console.log("Pikachu fue asesinado?: " + activo);
}
//Array
function poderes() {
    const poderes = ["Fuego", "Rayo", "Trueno"];
    poderes.push("Agua");
    console.log(poderes);
}
//Enum
function estado() {
    let Estado;
    (function (Estado) {
        Estado["on"] = "Si";
        Estado["of"] = "No";
    })(Estado || (Estado = {}));
    let direccion = Estado.on;
    console.log("Pikachu revivio: " + direccion);
}
console.log(num1);
console.log(num2);
console.log(num3);
console.log(poderes());
console.log(mostrar("Ash", "Pikachu")); // AshCompro poder para Pikachu, Pikachu: GraciasAsh 
console.log(atacar(100)); // Atacando con poder: Lanza llamas, undefined
murio(true); // true
console.log(estado()); // Pikachu revivio :Si, undefined
