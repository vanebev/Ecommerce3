

class ModelMem {

    constructor(){
        this.pedidos =[
            {
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
                "cantidad":1}]
            }
        ]
    }

    obtenerPedidos =async () => this.pedidos

    
    guardarPedidos =async pedido=> {
        pedido.id = String(parseInt(this.pedidos[this.pedidos.length-1]?.id || 0) + 1) //?. optional chaining + || short circuit operator
        this.pedidos.push(pedido)
        return pedido
    }

   
}
export default ModelMem
