"use strict";
(() => {
    let cuadrado = { alto: 45, ancho: 23, mostrarFigura() {
            return "Hola desde la interfaz";
        } };
    console.log(cuadrado.mostrarFigura());
    //Implementar interfaz a una clase
    class Figura {
        constructor() {
            this.alto = 45;
            this.ancho = 23;
        }
        mostrarFigura() {
            return "Hola";
        }
    }
    let instancia = new Figura();
    console.log(instancia.mostrarFigura);
})();
