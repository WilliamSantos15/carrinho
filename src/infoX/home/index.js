import { useState } from 'react'
import { Container } from './styled'

export default function Home(){
    const [produtos, setProdutos] = useState([]);
    function listar() {
        const r = [{
            id: 1,
            imagem: "link imagem",
            titulo: "algumacoisa",
            preco: "preço da paradinha",
            descricao: "nossa super legal esssa merda",
            especificacoes: "ele funciona"
        },
        {
            id: 2,
            imagem: "link imagem",
            titulo: "outra coisa",
            preco: "uau que caro",
            descricao: "muito legal da pra fazer nada com isso",
            especificacoes: "ele liga"
        },
        {
            id: 3,
            imagem: "link imagem",
            titulo: "outra coisa depois da dee cima",
            preco: "é mais caro que o do lado",
            descricao: "uau consegui fazer um total de nada com isso",
            especificacoes: "dá shoki"
        }
        
    ]

    setProdutos(r);
    }

    return(
        <Container>
                <h1> Sejam Bem-vindos!</h1>
                <br/>
                <button onClick={listar}> Listar </button>
                <br/>

                <div className="listaprodutos">

                    {produtos.map(item =>
                        <Produto info={item} /> 
                    )}

                </div>
        </Container>
    )
}
