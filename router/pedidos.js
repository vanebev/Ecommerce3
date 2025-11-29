import express from 'express'
import Controlador from '../controlador/pedidos.js'

class Router {
    #controlador = null

    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()

        // Obtener todos los pedidos (si el profe lo prueba en Postman)
        router.get('/', this.#controlador.obtenerPedidos)

        // Guardar pedido (carrito)
        router.post('/', this.#controlador.guardarPedidos)

        // MercadoPago
        router.post('/mp/create_preference', this.#controlador.createPreference)

        return router
    }
}

export default Router
