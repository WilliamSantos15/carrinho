import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Conclusao() {
    const [pedido, setPedido] = useState({});

    useEffect(() => {
        setPedido({
            numero: 5000,
            dataEntrega: '15/10/2021',
            cliente: 'William Silva Santos'
        })
    }, []);

    return(
        <div className="">
            <h1> Confirmar sua compra </h1>

            <h3> Pedido: {pedido.numero} </h3>
            <h3> Cliente: {pedido.cliente} </h3>
            <h3> Previsão de Entrega: {pedido.dataEntrega} </h3>

            <Link to={{
                pathname: '/infoX/conclusao',
                state: pedido
            }}>
                <button> Confirmar Compra </button>
            </Link>
        </div>
    )
}