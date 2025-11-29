import express from 'express'
import Controlador from '../controlador/productos.js'

class Router {
    #controlador = null

    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()

        // Obtener TODOS los productos
        router.get('/', this.#controlador.obtenerProductos)

        // Obtener UN producto por id
        router.get('/:id', this.#controlador.obtenerProductos)

        // Crear producto
        router.post('/', this.#controlador.guardarProductos)

        // Actualizar producto
        router.put('/:id', this.#controlador.actualizarProductos)

        // Eliminar producto
        router.delete('/:id', this.#controlador.eliminarProducto)

        console.log('Archivo router/productos.js cargado correctamente')
        return router
    }
}

export default Router
