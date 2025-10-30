import Server from './server.js'
import config from './config.js'
import CnxMongoDB from './model/DAOS/DBMongo.js'

if(config.MODO_PERSISTENCIA == 'MONGODB'){
    await CnxMongoDB.conectar()
}


const server = new Server(config.PORT)
server.start()