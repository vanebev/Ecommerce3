 import express from 'express'

import Controlador from '../controlador/productos.js'
 
 class Router {
    #controlador = null

    constructor(){
        this.#controlador = new Controlador()
    }
    config(){
       const router = express.Router()

        router.get('{/:id}', this.#controlador.obtenerProductos )
        router.post('/', this.#controlador.guardarProductos) 
        router.put('/:id', this.#controlador.actualizarProductos) 
        router.delete('/:id', this.#controlador.eliminarProducto)
    
    
        return router
    }
}
export default Router