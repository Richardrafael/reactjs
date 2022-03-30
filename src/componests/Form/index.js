import React from "react";
import  { AreaForm } from './styled.js';
function Form(){
    return(
        <AreaForm>
       <div>
      <h1 className="h">Conta de agua</h1>

      <form className = "cliente">
        <div>
          <input id="fornecimento" name="Fornecimento" type="text" placeholder="Fornecimento" />
        </div>
        <div >
          <input id="CNPJ" name="CNPJ" type="number" placeholder="CNPJ" />
        </div>
        <div >
          <input id="CPF" name="CPF" type="number" placeholder="CPF" />
        </div>
        <div >
          <input id="economias" name="economias" type="number" placeholder="Economias"  />
        </div>
        <div>
          <input id="condicao" name="codicao" type="number"  placeholder="Condição"/>
        </div>
        <div >
          <input id="VtAgua" name="VtAgua" type="number" placeholder="Valor total da água "  />
        </div>
        <div >
          <input id="multa" name="multa" type="number" placeholder="Multa" />
        </div>
        <div >
          <input id="valortributos" name="valortributos" type="number" placeholder="Valor tributos" />
        </div>
        <div>
        <div>
          <input id="concessionaria" name="concessionaria" type="text" placeholder="Concessionaria " />
        </div>
        <div >
          <input id="documento" name="documento" type="number" placeholder="Documento"  />
        </div>
        <div >
          <input id="nome" name="nome" type="text" placeholder="Nome cliente " />
        </div>
        <div >
          <input id="dataapre" name="dataapr" type="date"  placeholder="Data Apresentação"/>
        </div>
        <div >
          <input id="consumo" name="consumo" type="number" placeholder="Consumo" />
        </div>
        <div >
          <input id="Vlesgoto" name="Vlesgoto" type="number" placeholder="Valor total esgoto" />
        </div>
        <div >
          <input id="jurosm" name="jurosm" type="number" placeholder="Juros Moradia" />
        </div>
        <div >
          <input id="Vt" name="Vt" type="number" placeholder="Valor Total" />
        </div>
        <div >
          <input id="dataemi" name="dataemi" type="date" placeholder="Data de Emissão"  />
        </div>
        <div >
          <input id="proximaleitura" name="proximaleitura" type="number" placeholder="Proxima leitura" />
        </div>
        <div >
          <input id="PConsumo" name="PConsumo" type="data" placeholder="Periodo de Consumo" />
        </div>
        <div >
          <input id="VtConsumo" name="VtConsumo" type="number" placeholder="Valor total de Consumo" />
        </div>
        <div >
          <input id="taxa" name="taxa" type="number" placeholder="Taxa de Regulação" />
        </div>
        <div >
          <input id="datavencimento" name="datavencimento" type="data" placeholder="Data de Vencimento"  />
        </div>
        <div >
          <input id="TLigação" name="TLigação" type="text" placeholder="Taxa de ligação" />
        </div>
        <div >
          <input id="MediaConsumo" name="MediaConsumo" type="number"  placeholder="Media de Consumo" />
        </div>
    
       
          
          <button type="submit">Enviar</button>
          <button type="submit">UPLOAD DA CONTA</button>
        </div>
      </form>
    </div>
        </AreaForm>
    )
}

export default Form;