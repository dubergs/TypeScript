"use strict";
/*
(() => {
    class Pokemon {
        // Los valores estaticos no pueden ir en el constructor
        constructor(
            private nombre: string,
            private poder: string,
            private salud: number
        ) {

        }

    }
    
    const seleccionar: Pokemon = new Pokemon('Pikachu', 'Electrico', 100);
    console.log(seleccionar);
})()

/*
(() => {
    class Pokemon {
        private nombre: string;
        private poder: string;
        private salud: number;

        // Constructor
        constructor(nombre:string, poder:string, salud:number) {
            this.nombre = nombre;
            this.poder = poder;
            this.salud = salud;
            this.mostrar(); // Llamamos al metodo mostrar desde el constructor
        }

        private mostrar(): void {
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Poder: ${this.poder}`);
            console.log(`Salud: ${this.salud}`);
        }
    }

    const select: Pokemon = new Pokemon('Pikachu', 'Electrico', 100);
    console.log(select);
})()

//Clases Extends
(() => {
    class Entrenador {
        constructor( protected nombreEntrenador: string, public edad: number) {} // protected: solo se puede acceder desde la clase padre y las clases hijas
        elegir(): void {
            console.log(`El entrenador ${this.nombreEntrenador} tiene ${this.edad} años`);
        }

        // Get: Obtener un valor
        public get nombreEdad(): string {
            return this.nombreEntrenador + ' ' + this.edad;
        }
    }

    class Pokemon extends Entrenador {
        constructor(
            public nombre: string,
            public poder: string,
            public salud: number,
            public nombreEntrenador: string,
            public edad: number
        ) {
            super(nombreEntrenador, edad);
        }
        
        // Set: Modificar un valor
        public set setSalud(salud: number) {
            this.salud = salud;
        }
    }

    const select: Pokemon = new Pokemon('Pikachu', 'Electrico', 100, 'Ash', 10);
    console.log(select);
})() */
//Clase Abstracta
(() => {
    class Pintura {
    }
    class persona extends Pintura {
        interpretacion() {
            console.log('Persona interpreta una pintura');
        }
    }
    const persona1 = new persona();
    console.log(persona1.interpretacion());
})();
