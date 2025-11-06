import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"


class ModelMongoDB {

    constructor(){}

    obtenerProductos =async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
        
                const productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
                //console.log(productos)
                return productos
    }
    
    obtenerProducto =async id => {
         if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
        
                //const producto = await CnxMongoDB.db.collection('productos').findOne({_id: new ObjectId(id)})
                const producto = await CnxMongoDB.db.collection('productos').findOne({_id: ObjectId.createFromHexString(id)})
                //console.log(producto)
                return producto         

    }

    
    guardarProductos =async  producto=> {
         if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
         
                 await CnxMongoDB.db.collection('productos').insertOne(producto)
                 return producto
        
    }

    actualizarProductos = async (id, producto) => {
  if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')

  console.log('🟦 DAO.actualizarProductos filtro:', { _id: new ObjectId(id) })
  console.log('🟦 DAO.actualizarProductos $set:', producto)

  try {
    const result = await CnxMongoDB.db
      .collection('productos')
      .updateOne({ _id: new ObjectId(id) }, { $set: producto })

    console.log('🟩 updateOne result =>', {
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
      acknowledged: result.acknowledged
    })

    const productoActualizado = await this.obtenerProducto(id)
    console.log('🟩 DAO retorna:', productoActualizado)
    return productoActualizado
  } catch (error) {
    console.error('🟥 Error en updateOne:', error)
    throw error
  }
}


    eliminarProducto =async id => {
          borrarProducto = async id => {
                if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
        
                const productoEliminado = await this.obtenerProducto(id)
                await CnxMongoDB.db.collection('productos').deleteOne({_id: ObjectId.createFromHexString(id)})
        
                return productoEliminado
            }
        
    }
}
export default ModelMongoDB
