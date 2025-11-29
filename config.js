import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 8080

const STRCNX = process.env.STRCNX   // URL de Mongo Atlas
const BASE = process.env.BASE       // nombre de la base
const MP_ACCESS_TOKEN = process.env.MP_ACCESS_TOKEN || ''

export default {
    PORT,
    STRCNX,
    BASE,
    MP_ACCESS_TOKEN
}
