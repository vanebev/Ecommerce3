import ModelMongoDB from '../model/DAOS/pedidos/pedidosMongoDB.js'
import { validar } from './validaciones/pedido.js'
import { preference } from './pago.js'

class Servicio {
    constructor() {
        this.model = new ModelMongoDB()
    }

    obtenerPedidos = async () => {
        const pedidos = await this.model.obtenerPedidos()
        return pedidos
    }

    guardarPedidos = async pedido => {
        const res = validar(pedido)

        if (!res.result) {
            throw new Error(res.error.details[0].message)
        }

        const pedidoGuardado = await this.model.guardarPedidos(pedido)
        return pedidoGuardado
    }

    createPreference = async datos => {
        try {
            const preferences = await preference.create(datos.prefItems)
            const preferenceId = preferences.id
            return preferenceId
        } catch (error) {
            console.error('Error en createPreference:', error.message)
            throw new Error('Error al crear la preferencia de pago')
        }
    }
}

export default Servicio
