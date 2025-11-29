import Joi from 'joi'

export const validar = producto => {

    const productoSchema = Joi.object({
        nombre: Joi.string().min(3).max(30).required(),
        precio: Joi.number().min(0).max(100000000).required(),
        stock: Joi.number().integer().min(0).max(999).required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        detalles: Joi.string().required(),
        descripcionCorta: Joi.string().min(3).max(200).required(),
        descripcionLarga: Joi.string().min(3).max(1000).required(),
        edadDesde: Joi.number().integer().min(0).max(99).required(),
        edadHasta: Joi.number().integer().min(0).max(99).required(),
        
        foto: Joi.string().required(),
        envio: Joi.boolean().required(),
    })

    const { error } = productoSchema.validate(producto)
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}