import Servicio from '../servicio/pedidos.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    obtenerPedidos = async (req, res) => {
        try {
            const pedidos = await this.servicio.obtenerPedidos()
            res.json(pedidos)
        } catch (error) {
            console.error('GET /api/pedidos ERROR:', error.message)
            res.status(500).json({ errMsg: 'Error al obtener los pedidos' })
        }
    }

    guardarPedidos = async (req, res) => {
        try {
            const pedido = req.body

            // validación genérica
            if (!Object.keys(pedido).length) {
                return res.status(400).json({ errMsg: 'El pedido está vacío' })
            }

            const pedidoGuardado = await this.servicio.guardarPedidos(pedido)
            res.json(pedidoGuardado)
        } catch (error) {
            console.error('POST /api/pedidos ERROR:', error.message)

            // si viene de Joi normalmente es validación de datos => 400
            if (error.message?.includes('"') || error.message?.includes('is required')) {
                return res.status(400).json({ errMsg: error.message })
            }

            res.status(500).json({ errMsg: 'Error al guardar el pedido' })
        }
    }

    createPreference = async (req, res) => {
        try {
            const datos = req.body
            const preferenceId = await this.servicio.createPreference(datos)
            res.json(preferenceId)
        } catch (error) {
            console.error('POST /api/pedidos/preference ERROR:', error.message)
            res.status(500).json({ errMsg: 'Error al crear la preferencia de pago' })
        }
    }
}

export default Controlador
