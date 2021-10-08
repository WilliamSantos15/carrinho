import { Container } from './styled'
import { Link } from 'react-router-dom'

export default function Produto(props){
    return(
        <Container>
            <img className="img" src={props.info.imagem} alt="" />
            <div className="titulo"> {props.info.titulo} </div>
            <div className="preco"> {props.info.preco} </div>

            <Link to={{
                pathname: '/detalhe',
                state: props.info
            }}>
                <button> Ver detalhes </button>
            </Link>
        </Container>

    )
}