import ModelMongoDB from '../model/DAOS/productos/productosMongoDB.js'
import { validar } from './validaciones/producto.js'

class Servicio {
    constructor() {
        this.model = new ModelMongoDB() 
    }

    obtenerProductos = async id => {
        if (id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        } else {
            const productos = await this.model.obtenerProductos()
            return productos
        }
    }

    guardarProductos = async producto => {
        const res = validar(producto)
        if (res.result) {
            const productoGuardado = await this.model.guardarProductos(producto)
            return productoGuardado
        } else {
            throw new Error(res.error.details[0].message)
        }
    }

    actualizarProductos = async (id, producto) => {
        const productoActualizado = await this.model.actualizarProductos(id, producto)
        return productoActualizado
    }

    eliminarProducto = async id => {
        const productoEliminado = await this.model.eliminarProducto(id)
        return productoEliminado
    }
}

export default Servicio
