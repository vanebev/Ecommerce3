import ModelFile from "./productosFile.js"
import ModelMem from "./productosMem.js"
import ModelMongoDB from "./productosMongoDB.js"

class ModelFactory {
    static get(tipo){
        switch(tipo){
            case 'MEM':
                console.log('*** Persistiendo en memoria***')
                return new ModelMem

            case 'FILE':
                console.log('*** Persistiendo en file system***')
                return new ModelFile()
            
            case 'MONGODB':
                console.log('*** Persistiendo en MONGODB (base da datos)***')
                return new ModelMongoDB()



            default:
                console.log('*** Persistiendo en memoria (default)***')
                return new ModelMem


        }
    }
}

export default ModelFactory