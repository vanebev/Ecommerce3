import Servicio from '../servicio/productos'

class Controlador{
    constructor(){
        this.servicio = new Servicio()
    }

    obtenerProductos = async (req,res) =>{
        // 👀 LOG: ver si llega id
        console.log('GET /api/productos hit – params:', req.params)   // <-- LOG
        try{
            const { id } = req.params 
            const productos = await this.servicio.obtenerProductos(id) 
            // 👀 LOG: ver lo que devuelve el servicio
            console.log('GET productos -> respuesta servicio:', Array.isArray(productos) ? `Array(${productos.length})` : productos) // <-- LOG
            res.json(productos)
        }
        catch(error){
            // 👀 LOG: capturar error real
            console.error('GET productos ERROR:', error) // <-- LOG
            res.status(500).json({errMsg: error.message})
        }
    }
        
    guardarProductos = async (req,res) => {
        // 👀 LOG: ver body y headers
        console.log('POST /api/productos hit – headers content-type:', req.headers['content-type']) // <-- LOG
        console.log('POST /api/productos body keys:', Object.keys(req.body || {})) // <-- LOG
        console.log('POST /api/productos body.marca:', req.body?.marca) // <-- LOG
        try{
            const producto = req.body

            // validación genérica
            if(!Object.keys(producto).length) throw new Error('El producto está vacío')

            // 👀 LOG: antes de llamar al servicio
            console.log('Llamando Servicio.guardarProductos(producto)') // <-- LOG
            const productoGuardado = await this.servicio.guardarProductos(producto)
            // 👀 LOG: después de llamar al servicio
            console.log('Servicio.guardarProductos OK ->', productoGuardado) // <-- LOG

            res.json(productoGuardado)
        }
        catch(error){
            // 👀 LOG: si falla validación de "marca" lo vas a ver claro acá
            console.error('POST productos ERROR:', error) // <-- LOG
            res.status(500).json({errMsg: error.message})
        }
    }

    actualizarProductos = async (req,res) => {
        // 👀 LOG: params + body
        console.log('PUT /api/productos hit – params:', req.params, 'body keys:', Object.keys(req.body || {})) // <-- LOG
        try{
            const { id } = req.params
            const producto = req.body

            const productoActualizado = await this.servicio.actualizarProductos(id, producto)
            console.log('PUT productos -> respuesta servicio:', productoActualizado) // <-- LOG
            res.json(productoActualizado)
        }
        catch(error){
            console.error('PUT productos ERROR:', error) // <-- LOG
            res.status(500).json({errMsg: error.message})
        }
    }

    eliminarProducto = async (req,res) => {
        // 👀 LOG: params
        console.log('DELETE /api/productos hit – params:', req.params) // <-- LOG
        try{
            const { id } = req.params
            const productoEliminado = await this.servicio.eliminarProducto(id)
            console.log('DELETE productos -> respuesta servicio:', productoEliminado) // <-- LOG
            res.json(productoEliminado)
        }
        catch(error){
            console.error('DELETE productos ERROR:', error) // <-- LOG
            res.status(500).json({errMsg: error.message})
        }
    }
}

export default Controlador
