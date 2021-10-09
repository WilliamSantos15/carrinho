import { CarouselConfig } from './config';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css'

import { useState } from 'react'
import Produto from '../produto'
import { Container } from './styled'

export default function Home(){
    const [produtos, setProdutos] = useState([]);
    function listar() {
        const r = [
        {
            id: 1,
            imagem: "https://images-americanas.b2w.io/produtos/3634061067/imagens/vanellope-pc-gamer-holydragon/3634061067_1_xlarge.jpg",
            titulo: "Pc Gamer",
            preco: "R$ 12.250,00",
            descricao: "Nossa super legal ele é roxo",
            especificacoes: "ele funciona ligando na tomada"
        },
        {
            id: 2,
            imagem: "https://static.netshoes.com.br/produtos/poltrona-gamer-mancer-fenrir-pretoazul-mcr-fnr-bu01/18/0Y9-0084-118/0Y9-0084-118_zoom1.jpg?ts=1618271796&ims=544x",
            titulo: "Cadeira Gamer",
            preco: "R$ 1.000,00",
            descricao: "Muito legal da pra fazer nada com isso",
            especificacoes: "dá pra sentar"
        },
        {
            id: 3,
            imagem: "https://cdn.awsli.com.br/600x450/801/801209/produto/86493397/48d75ac71e.jpg",
            titulo: "Teclado Gamer",
            preco: "R$ 600,00",
            descricao: "É bom pra descontar a raiva",
            especificacoes: "faz teki teki"
        },
        {
            id: 4,
            imagem: "https://images-americanas.b2w.io/produtos/3634061067/imagens/vanellope-pc-gamer-holydragon/3634061067_1_xlarge.jpg",
            titulo: "Pc Gamer",
            preco: "R$ 12.250,00",
            descricao: "Nossa super legal ele é roxo",
            especificacoes: "ele funciona ligando na tomada"
        },
        {
            id: 5,
            imagem: "https://static.netshoes.com.br/produtos/poltrona-gamer-mancer-fenrir-pretoazul-mcr-fnr-bu01/18/0Y9-0084-118/0Y9-0084-118_zoom1.jpg?ts=1618271796&ims=544x",
            titulo: "Cadeira Gamer",
            preco: "R$ 1.000,00",
            descricao: "Muito legal da pra fazer nada com isso",
            especificacoes: "dá pra sentar"
        },
        {
            id: 6,
            imagem: "https://cdn.awsli.com.br/600x450/801/801209/produto/86493397/48d75ac71e.jpg",
            titulo: "Teclado Gamer",
            preco: "R$ 600,00",
            descricao: "É bom pra descontar a raiva",
            especificacoes: "faz teki teki"
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

                <div className="lista-produtos">

                    <Carousel
                    responsive={CarouselConfig}
                    infinite={true}
                    showDots={true}
                    containerClass="carousel-container">

                    {produtos.map(item =>
                        <Produto
                        key={item.id}
                        info={item} /> 
                    )}

                    </Carousel>

                </div>
        </Container>
    )
}
