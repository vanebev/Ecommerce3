import express from 'express'
import RouterProductos from './router/productos.js'

class Server{
    constructor(port){
        this.port = port
        this.routerProductos = new RouterProductos().config()
    }
    start(){
        const app = express()

        app.use(express.json())

        //.............Rutas/ endpoints API RESTFUL...
        app.use('/api/productos', this.routerProductos)

       
        const server = app.listen(this.port, () => console.log(`Servidor ApiRestFul escuchando en http://localhost:${this.port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server