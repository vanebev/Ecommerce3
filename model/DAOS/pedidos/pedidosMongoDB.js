import { ObjectId} from "mongodb"
import CnxMongoDB from "../DBMongo.js"


class ModelMongoDB {

    constructor(){}

    obtenerPedidos =async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')
        
       const pedidos = CnxMongoDB.db.collection('pedidos').find({}).toArray()
       return pedidos
    }
    
    
    guardarPedidos =async  pedido=> {
         if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexion a MongoDB')

        await CnxMongoDB.db.collection('pedidos').insertOne(pedido)
        return pedido
        
    }

}
export default ModelMongoDB
