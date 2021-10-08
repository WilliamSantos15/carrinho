import { Container } from './styled'

export default function Produto(props){
    return(
        <Container>
            <img className="img" src={props.info.imagem} alt="" />
            <div className="titulo"> {props.info.titulo} </div>
            <div className="preco"> {props.info.preco} </div>
        </Container>

    )
}