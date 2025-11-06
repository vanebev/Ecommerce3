import ModelFile from "./productosFile.js"
import ModelMem from "./productosMem.js"
import ModelMongoDB from "./productosMongoDB.js"

class ModelFactory {
    static get(tipo){
        switch(tipo){
            case 'MEM':
                console.log('*** Persistiendo en memoria (productos)***')
                return new ModelMem

            case 'FILE':
                console.log('*** Persistiendo en file system (productos)***')
                return new ModelFile()
            
            case 'MONGODB':
                console.log('*** Persistiendo en base de datos  MONGODB (productos)***')
                return new ModelMongoDB()



            default:
                console.log('*** Persistiendo en memoria (default) (productos)***')
                return new ModelMem


        }
    }
}

export default ModelFactory