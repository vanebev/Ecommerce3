import cloudinary from '../cloudinary.js'

class Servicio {
  async recibirArchivo(file) {
    if (!file) {
      throw new Error('No se recibió archivo')
    }

    const result = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${file.buffer.toString('base64')}`
    )

    return {
      urlFoto: result.secure_url
    }
  }
}

export default Servicio
