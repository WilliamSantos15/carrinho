import { StrictMode } from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './styles.css'

import Contador from "./infoX/comunicacaoComps/contador"
import Pedido from "./infoX/comunicacaoComps/finalizacaoPedido/pedido"
import ConclusaoPedido from "./infoX/comunicacaoComps/finalizacaoPedido/conclusao"

import Home from './infoX/home'
import DetalheProduto from './infoX/detalheProduto'
import Carrinho from './infoX/carrinho'

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/detalhe" component={DetalheProduto}/>
                <Route path="/carrinho" component={Carrinho}/>
                <Route path="/infoX/contador" exact={true} component={Contador}/>
                <Route path="/infoX/pedido"  component={Pedido}/>
                <Route path="/infoX/conclusao" component={ConclusaoPedido}/> 
            </Switch>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);

