interface Ventas{
    id:number
    fecha:Date
    idProductos:number
}

interface Productos{
    id:number
    nombre:string
    precio:number
}

interface Clientes {
    id:number
    nombre:string
    telefono:string
    nitNacional:string
}

interface Proveedores extends Clientes {
    id:number
    nitFiscal:number
}

interface AddData<T> {
    insertarItems(newItem:T):void
}

class DataCollection<T> implements AddData<T> {
    private items:T[] = []
    insertarItems(newItem:T){
        this.items.push(newItem)
    }
}

const producto = new DataCollection<Productos>()
const newProducto = {
    id: 1,
    nombre: 'Galletas',
    precio: 1500
}

producto.insertarItems(newProducto)
console.log(producto)