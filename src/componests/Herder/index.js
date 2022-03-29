import React from "react";
import {AreaHeader} from './styled.js';
function Herder() {
    return(
        <AreaHeader>
        <nav>
            <div className ="container" >
                <div className="menu"> 
                    <button className="esc ca"> HOME</button>
                    <button className="esc ca">cadastro conta</button>
                    <button className="esc ca">Cadastro de unidade</button>
                    <button className="esc ca"> cadastro de contrato</button>
                    <button className="esc ca"> cadastro de concessionaria</button>
                    <button className="esc ca"> relatorios</button>
                    <button className="esc ca"> painel de controle</button>
                    <button className="esc ca"> quadro de contratos</button>
                    <button className="esc ca"> quadro de concessionarias</button>
                    <button className="esc ca"> Alerta</button>
                    <button className="esc ca"> logs</button>
                    <button className="sair"> sair</button>

                </div>
            </div>







        </nav> 
       </AreaHeader>
    )
}

export default Herder;