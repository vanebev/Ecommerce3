
import config from '../config.js'
import ModelFactory from '../model/DAOS/pedidos/pedidosFactory.js'
import { validar } from './validaciones/pedido.js'

class Servicio {
    constructor(){
        //this.model = config.MODO_PERSISTENCIA == 'FILE'? new ModelFile() : new ModelMem()
         this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerPedidos = async id =>{
           const pedidos =await this.model.obtenerPedidos()
            return pedidos
        }
    

    guardarPedidos =async pedido => {
        //validadcion especifica
        const res =  validar(pedido)
        if(res.result) {
            const pedidoGuardado = await this.model.guardarPedidos(pedido)
            return pedidoGuardado
        }
        else {
            throw new Error(res.error.details[0].message)
        }
    }
}

export default Servicio