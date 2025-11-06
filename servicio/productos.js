
import config from '../config.js'
import ModelFactory from '../model/DAOS/productos/productosFactory.js'
import { validar } from './Validaciones/producto.js'

class Servicio {
    constructor(){
        //this.model = config.MODO_PERSISTENCIA == 'FILE'? new ModelFile() : new ModelMem()
         this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id =>{
        if (id){
            const producto =await this.model.obtenerProducto(id)
            return producto
        }
        else{
            const productos =await this.model.obtenerProductos()
            return productos
        }
    }

    guardarProductos =async producto => {
        //validadcion especifica
        const res =  validar(producto)
        if(res.result) {
            const productoGuardado = await this.model.guardarProductos(producto)
            return productoGuardado
        }
        else {
            //console.log(res.error)
            throw new Error(res.error.details[0].message)
        }
    }



    actualizarProductos =async (id,producto) => {
        const productoActualizado =await this.model.actualizarProductos(id, producto)
        return productoActualizado
    }
    eliminarProducto =async  id => {
        const productoEliminado =await this.model.eliminarProducto(id)
        return productoEliminado
    }
}
export default Servicio