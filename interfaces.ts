(() => {
    //Interfaz basica
    interface InterFigura{
        readonly alto:number
        readonly ancho:number
        mostrarFigura():string //Metodos dentro de interfaces
    }

    let cuadrado:InterFigura={alto:45, ancho:23, mostrarFigura(){
        return "Hola desde la interfaz";
    }}

    console.log(cuadrado.mostrarFigura())


    //Implementar interfaz a una clase
    class Figura implements InterFigura{
        public alto=45
        public ancho=23
        mostrarFigura(): string {
            return "Hola"
        }
    }

    let instancia = new Figura()
    console.log(instancia.mostrarFigura)
})()