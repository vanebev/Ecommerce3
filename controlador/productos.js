import Servicio from '../servicio/productos.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerProductos = async (req, res) => {
        try {
            const { id } = req.params
            const productos = await this.servicio.obtenerProductos(id)
            res.json(productos)
        } catch (error) {
            console.error('GET productos ERROR:', error)
            res.status(500).json({ errMsg: error.message })
        }
    }

    guardarProductos = async (req,res) => {
    try {
        const producto = req.body

        const productoGuardado = await this.servicio.guardarProductos(producto)
        res.json(productoGuardado)
    }
    catch(error){
        console.error('POST productos ERROR:', error)
        res.status(500).json({errMsg: error.message})
    }
}


    actualizarProductos = async (req, res) => {
        try {
            const { id } = req.params
            const productoActualizado =
                await this.servicio.actualizarProductos(id, req.body)

            res.json(productoActualizado)
        } catch (error) {
            console.error('PUT productos ERROR:', error)
            res.status(500).json({ errMsg: error.message })
        }
    }

    eliminarProducto = async (req, res) => {
        try {
            const { id } = req.params
            const productoEliminado = await this.servicio.eliminarProducto(id)
            res.json(productoEliminado)
        } catch (error) {
            console.error('DELETE productos ERROR:', error)
            res.status(500).json({ errMsg: error.message })
        }
    }
}

export default Controlador
