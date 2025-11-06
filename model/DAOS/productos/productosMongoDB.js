import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"


class ModelMongoDB {

    constructor(){}

    obtenerProductos =async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')
        
       const productos = CnxMongoDB.db.collection('productos').find({}).toArray()
       return productos
    }
    
    obtenerProducto =async id => {
        if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')
        
        const producto=  await CnxMongoDB.db.collection('productos').findOne({_id: ObjectId.createFromHexString(id)})
        return producto        

    }

    
    guardarProductos =async  producto=> {
         if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')

        await CnxMongoDB.db.collection('productos').insertOne(producto)
        return producto
        
    }

    actualizarProductos =async (id, producto)=> {
         if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
         
                 console.log(producto)            
         
                 try {
                     await CnxMongoDB.db.collection('productos').updateOne(
                         {_id: ObjectId.createFromHexString(id)},
                         { $set: producto}
                     )
                 }
                 catch(error) {
                     console.log(error.message)
                 }
         
                 const productoActualizado = await this.obtenerProducto(id)
                 return productoActualizado
             }

    eliminarProducto =async id => {
         if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')
        
        const productoEliminado = await this.obtenerProducto(id)
        await CnxMongoDB.db.collection('productos').deleteOne({_id: ObjectId.createFromHexString(id)})

        return productoEliminado
        
    }
}
export default ModelMongoDB
