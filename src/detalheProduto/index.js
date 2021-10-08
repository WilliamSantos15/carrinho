import Cookie from 'js-cookie'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container } from './styled'

export default function DetalheProduto(props){
    const [ produto, setProduto ] = useState(poros.location.state);
    const navigation = useHistory();

    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                ? JSON.parse(carrinho)
                : [];

    if (carrinho.some(item => item.id === produto.id) === false)
        carrinho.push({ ...produto, qtd: 1 });

        Cookie.set('carrinho', JSON.stringify(carrinho));
    }
}