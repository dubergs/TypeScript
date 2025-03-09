//Funcion autoinvocada
(() => {
    const pokemon: string = 'Pikachu';
    function returnNombre(): string {
        return pokemon
    }

    const nombre = returnNombre();
    console.log(nombre);
})()


//Funcion con parametros
function mostrarNombre(nombre: string, salud?: number): string { //El signo de interrogacion indica que el parametro es opcional
    return `${nombre} tiene ${salud || "-"} de salud`;
}

const nombre = mostrarNombre('Pikachu');
console.log(nombre);

//Funcion Rest
(() => {
    const fullPoder = (poder: string, ...datoExtra: string[]): string => {
        return `El poder es ${poder} y los datos extra son ${datoExtra.join(', ')}`;
    }
    
    const poder = fullPoder('Rayo', 'Paralisis', 'Electrico');
    console.log(poder);
})()