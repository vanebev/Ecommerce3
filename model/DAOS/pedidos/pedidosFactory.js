import ModelFile from "./pedidosFile.js"
import ModelMem from "./pedidosMem.js"
import ModelMongoDB from "./pedidosMongoDB.js"

class ModelFactory {
    static get(tipo){
        switch(tipo){
            case 'MEM':
                console.log('*** Persistiendo en memoria(pedidos)***')
                return new ModelMem

            case 'FILE':
                console.log('*** Persistiendo en file system(pedidos)***')
                return new ModelFile()
            
            case 'MONGODB':
                console.log('*** Persistiendo en base de datos MONGODB (pedidos)***')
                return new ModelMongoDB()



            default:
                console.log('*** Persistiendo en memoria (default) (pedidos)***')
                return new ModelMem


        }
    }
}

export default ModelFactory