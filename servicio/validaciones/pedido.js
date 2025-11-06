import Joi from 'joi'

export const validar = pedido => {

    /* const pedidoSchema = Joi.object({
        
    })

    const { error } = pedidoSchema.validate(pedido)
    if(error) {
        return { result: false, error }
    } */
    return { result: true }
}