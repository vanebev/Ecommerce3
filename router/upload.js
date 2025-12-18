import express from 'express'
import multer from 'multer'

import Controlador from '../controlador/upload.js'

const upload = multer({ storage: multer.memoryStorage() })

class Router {
  #controlador

  constructor() {
    this.#controlador = new Controlador()
  }

  config() {
    const router = express.Router()
    router.post('/', upload.single('archivo'), this.#controlador.recibirArchivo)
    return router
  }
}

export default Router
