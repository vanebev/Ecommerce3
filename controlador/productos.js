import Servicio from '../servicio/productos.js'


class Controlador{
    constructor(){
        this.servicio = new Servicio()
    }
    obtenerProductos =async (req,res) =>{
        const { id } = req.params 
        const productos =await this.servicio.obtenerProductos(id) 
        res.json(productos)
    }
        
    guardarProductos =async (req,res) => {
        const producto = req.body
        const productoGuardado =await this.servicio.guardarProductos(producto)
        res.json(productoGuardado)
    }
    actualizarProductos =async (req,res) => {
        const { id } = req.params
        const producto = req.body

        const productoActualizado =await this.servicio.actualizarProductos(id, producto)
        res.json(productoActualizado)
    }
    eliminarProducto =async  (req,res) => {
        const { id } = req.params
    const productoEliminado =await this.servicio.eliminarProducto(id)
        res.json(productoEliminado)
    }
}

export default Controlador