(() => {
    // Declaramos una interfaz para tipar un objeto
    type propiedades = {
        nombre: string,
        vida: number, 
        ataque: number, 
        curar?: Function
    }
    
    let pokemon:propiedades = {
        nombre: 'Pikachu',
        vida: 100,
        ataque: 55,
        curar: function (curar: number) {
            this.vida += curar;
        }
    }
    console.log(pokemon.vida, pokemon.curar?.(10)) // Colocar .curar?. para evitar error si la funcion no existe


    // Otra forma de declarar un objeto
    let pokemones:(string | number | propiedades) = 'Pokemones' // Se puede declarar un objeto con las propiedades y mas tipos de datos
    console.log(typeof pokemones) 

    // No se puede actualizar el objeto con un tipo de dato diferente sin declarar el tipo de dato
    pokemones = 45
    console.log(typeof pokemones)

    // Se puede actualizar el objeto con un tipo de dato diferente si ya se declaro el tipo de dato
    pokemones = {
        nombre: 'Charmander',
        vida: 100,
        ataque: 60
    }
    console.log(typeof pokemones)
})()