"use strict";
(() => {
    var _a;
    let pokemon = {
        nombre: 'Pikachu',
        vida: 100,
        ataque: 55,
        curar: function (curar) {
            this.vida += curar;
        }
    };
    console.log(pokemon.vida, (_a = pokemon.curar) === null || _a === void 0 ? void 0 : _a.call(pokemon, 10)); // Colocar .curar?. para evitar error si la funcion no existe
    // Otra forma de declarar un objeto
    let pokemones = 'Pokemones'; // Se puede declarar un objeto con las propiedades y mas tipos de datos
    console.log(typeof pokemones);
    // No se puede actualizar el objeto con un tipo de dato diferente sin declarar el tipo de dato
    pokemones = 45;
    console.log(typeof pokemones);
    // Se puede actualizar el objeto con un tipo de dato diferente si ya se declaro el tipo de dato
    pokemones = {
        nombre: 'Charmander',
        vida: 100,
        ataque: 60
    };
    console.log(typeof pokemones);
})();
