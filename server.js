import express from 'express'
import cors from 'cors'
import RouterProductos from './router/productos.js'
import RouterPedidos from './router/pedidos.js'
import RouterUpload from './router/upload.js'

class Server{
    constructor(port){
        this.port = port
        this.routerProductos = new RouterProductos()
        this.routerPedidos = new RouterPedidos()
        this.routerUpload = new RouterUpload()
    }
    start(){
        const app = express()
        app.use(cors())  // mildware para permitir peticiones desde origenes cruzados(ej: ambiente de desarrollo del frontend)
        app.use(express.static('public')) //midlware de recursos estaticos de express
        app.use(express.json())

        //.............Rutas/ endpoints API RESTFUL...
        app.use('/api/productos', this.routerProductos.config())
        app.use('/api/pedidos', this.routerPedidos.config())
        app.use('/api/upload', this.routerUpload.config())

       
        const server = app.listen(this.port, () => console.log(`Servidor ApiRestFul escuchando en http://localhost:${this.port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server