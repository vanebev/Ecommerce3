

class ModelMem {

    constructor(){
        this.productos =[
            {id:'1' ,nombre: 'prod1', precio:1234, stock:33 },
            {id:'2' ,nombre: 'prod2', precio:4567, stock:25 },
            {id:'3' ,nombre: 'prod3', precio:3342, stock:12 },
        ]
    }

    obtenerProductos =async () => this.productos
    
    obtenerProducto =async id => this.productos.find(p => p.id == id) || {}

    
    guardarProductos =async producto=> {
        producto.id = String(parseInt(this.productos[this.productos.length-1]?.id || 0) + 1) //?. optional chaining + || short circuit operator
        this.productos.push(producto)
        return producto
    }

    actualizarProductos =async (id, producto)=> {
        producto.id = id

        const index = this.productos.findIndex(p => p.id == id)
        this.productos.splice(index,1,producto)
        return producto
    }

    eliminarProducto =async  id => {
        const index = this.productos.findIndex(p => p.id == id)
        const producto = this.productos.splice(index,1,)[0]
        return producto 
    }
}
export default ModelMem
