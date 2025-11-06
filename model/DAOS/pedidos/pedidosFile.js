import fs from 'fs'

class ModelFile {
    #nombreArchivo = ''
    constructor(){
        this.#nombreArchivo = 'pedidos.json'
    }

    #leerArchivo = async () => {
       let pedidos = [{
"fyh": "8/10/2025, 08:51:58",
"pedido": [
        {
        "nombre": "mesa",
        "precio": 10000,
        "stock": 23,
        "marca": "Sleek Table designed with Marble for celebrated performance",
        "categoria": "Oriental Marble Ball",
        "detalles": "Innovative Ball featuring motionless technology and Silk construction",
        "foto": "https://avatars.githubusercontent.com/u/64645562",
        "envio": true,
        "id": "1",
        "cantidad": 1}
    ]
}]
       
        try{
         pedidos =  JSON.parse(await fs.promises.readFile(this.#nombreArchivo, 'utf-8'))
       }
       catch{}
        return pedidos
    }

    #escribirArchivo =async pedidos => {
       await fs.promises.writeFile(this.#nombreArchivo, JSON.stringify(pedidos, null,'\t'))
    }

    obtenerPedidos = async () => {
        const pedidos = await this.#leerArchivo()
        return pedidos
    }
    

    guardarPedidos =async pedido=> {
        const pedidos =await  this.#leerArchivo()
        pedido.id = String(parseInt(pedidos[pedidos.length-1]?.id || 0) + 1) //?. optional chaining + || short circuit operator
        pedidos.push(pedido)
        await this.#escribirArchivo(pedidos)
        return pedido
    }

}
export default ModelFile
