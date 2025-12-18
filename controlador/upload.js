import Servicio from '../servicio/upload.js'

class Controlador {
  constructor() {
    this.servicio = new Servicio()
  }

  recibirArchivo = async (req, res) => {
    try {
      const file = req.file
      const { urlFoto } = await this.servicio.recibirArchivo(file)
      return res.status(200).json({ urlFoto })
    } catch (error) {
      // 400 si no hay archivo, 500 si falló cloudinary
      const status = error.message.includes('No se recibió archivo') ? 400 : 500
      return res.status(status).json({ errMsg: error.message })
    }
  }
}

export default Controlador
