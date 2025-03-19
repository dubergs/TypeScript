interface Persona{
    id:number
    nombre:string
}

class Niño{
    private items: Persona[] = []
    insertItems(newItem:Persona):void{
        this.items.push(newItem )
    }

    getItems():string[]{
        return this.items.map((items) => items.nombre)
    }
}

const PeopleList = new Niño()
const newItem = {
    id: 1,
    nombre:'Duber'
}

PeopleList.insertItems(newItem)
console.log(PeopleList.getItems)