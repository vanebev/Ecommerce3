class Servicio {
  constructor() {}

  recibirArchivo = async (file) => {
    if (!file) throw new Error('No se recibió ningún archivo')

    const urlFoto = `/uploads/${file.filename}`
    return { urlFoto }
  }
}

export default Servicio
