import { BrowserRouter, Switch, Route } from "react-router-dom";

import Contador from "./infoX/comunicacaoComps/contador";
import Pedido from "./infoX/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./infoX/comunicacaoComps/finalizacaoPedido/conclusao";

import Home from "./infoX/home";
import DetalheProduto from "./infoX/detalheProduto";
import Carrinho from "./infoX/carrinho";

export default function Rotas() {
    return(
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
    );
}