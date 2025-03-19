"use strict";
//Funcion autoinvocada
(() => {
    const pokemon = 'Pikachu';
    function returnNombre() {
        return pokemon;
    }
    const nombre = returnNombre();
    console.log(nombre);
})();
//Funcion con parametros
function mostrarNombre(nombre, salud) {
    return `${nombre} tiene ${salud || "-"} de salud`;
}
const nombre = mostrarNombre('Pikachu');
console.log(nombre);
//Funcion Rest
(() => {
    const fullPoder = (poder, ...datoExtra) => {
        return `El poder es ${poder} y los datos extra son ${datoExtra.join(', ')}`;
    };
    const poder = fullPoder('Rayo', 'Paralisis', 'Electrico');
    console.log(poder);
})();
