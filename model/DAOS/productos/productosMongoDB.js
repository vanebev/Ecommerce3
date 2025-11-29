import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"

class ModelMongoDB {

    constructor(){}

    obtenerProductos = async () => {
        if (!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
        
        const productos = await CnxMongoDB.db
            .collection('productos')
            .find({})
            .toArray()
        return productos
    }
    
    obtenerProducto = async id => {
        if (!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
        
        const producto = await CnxMongoDB.db
            .collection('productos')
            .findOne({ _id: ObjectId.createFromHexString(id) })
        return producto
    }

    guardarProductos = async producto => {
        if (!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')
        
        await CnxMongoDB.db.collection('productos').insertOne(producto)
        return producto
    }

    actualizarProductos = async (id, producto) => {
        if (!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')

        try {
            const result = await CnxMongoDB.db
                .collection('productos')
                .updateOne({ _id: new ObjectId(id) }, { $set: producto })


            const productoActualizado = await this.obtenerProducto(id)
            console.log(' DAO retorna:', productoActualizado)
            return productoActualizado
        } catch (error) {
            console.error('Error en updateOne:', error)
            throw error
        }
    }

    eliminarProducto = async id => {
        if (!CnxMongoDB.connectionOK) {
            throw new Error('DAO sin conexión a MongoDB')
        }


        // Traigo el producto antes de borrar
        const productoEliminado = await this.obtenerProducto(id)

        if (!productoEliminado) {
            throw new Error(`No se encontró producto con id ${id}`)
        }

        await CnxMongoDB.db
            .collection('productos')
            .deleteOne({ _id: ObjectId.createFromHexString(id) })

        return productoEliminado
    }
}

export default ModelMongoDB
