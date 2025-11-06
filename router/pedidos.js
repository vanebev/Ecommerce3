 import express from 'express'

import Controlador from '../controlador/pedidos.js'
 
 class Router {
    #controlador = null

    constructor(){
        this.#controlador = new Controlador()
    }
    config(){
       const router = express.Router()

        router.get('{/:id}', this.#controlador.obtenerPedidos )
        router.post('/', this.#controlador.guardarPedidos) 
    
        return router
    }
}
export default Router