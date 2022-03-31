import React from "react";
import  { AreaForm } from './styled.js';
function Form(){
    return(
        <AreaForm>
    <section>
      <p className="titulo">Conta de agua</p>
      <div id = "cadastro">
      <form name="cadastro_agua" method = "POST">
      <table id = "tab_cadastro" className="conta_agua" cellSpacing={"12"}>
        <fieldset className="grupo">
          <tr className="campo"> 
            <td><input id="fornecimento" name="Fornecimento" type="text" placeholder="Fornecimento" /></td>
          </tr>
          <tr className="campo"> 
            <td><input id="CNPJ" name="CNPJ" type="number" placeholder="CNPJ" /></td>
          </tr>
          <tr className="campo" >
            <td><input id="CPF" name="CPF" type="number" placeholder="CPF" /></td>
          </tr>
        </fieldset>
        <fieldset className="grupo">
          <tr className="campo" > 
            <td><input id="economias" name="economias" type="number" placeholder="Economias"  /></td>
          </tr>
          <tr className="campo">
            <td><input id="condicao" name="codicao" type="number"  placeholder="Condição"/></td>
          </tr>
          <tr className="campo">
            <td><input id="VtAgua" name="VtAgua" type="number" placeholder="Valor total da água "  /></td>
          </tr>
        </fieldset >
        <fieldset className="grupo">
          <tr className="campo">
            <td><input id="multa" name="multa" type="number" placeholder="Multa" /></td>
          </tr>
          <tr className="campo">
            <td><input id="valortributos" name="valortributos" type="number" placeholder="Valor tributos" /></td>
          </tr>
          <tr className="campo">
            <td><input id="concessionaria" name="concessionaria" type="text" placeholder="Concessionaria " /></td>
          </tr>
        </fieldset>
        <fieldset className="grupo">
          <tr className="campo" >
            <td><input id="documento" name="documento" type="number" placeholder="Documento"  /></td>
          </tr>
          <tr className="campo">
            <td><input id="nome" name="nome" type="text" placeholder="Nome cliente " /></td>
          </tr>
          <tr className="campo">
            <td><input id="dataapre" name="dataapr" type="date"  placeholder="Data Apresentação"/></td>
          </tr>
        </fieldset>
        <fieldset className="grupo">
          <tr className="campo">
            <td><input id="consumo" name="consumo" type="number" placeholder="Consumo" /></td>
          </tr>
          <tr className="campo" >
           <td><input id="Vlesgoto" name="Vlesgoto" type="number" placeholder="Valor total esgoto" /></td>
          </tr>
          <tr className="campo" >
            <td><input id="jurosm" name="jurosm" type="number" placeholder="Juros Moradia" /></td>
          </tr>
        </fieldset>
        <fieldset className="grupo">
          <tr className="campo" >
            <td><input id="Vt" name="Vt" type="number" placeholder="Valor Total" /></td>
          </tr>
          <tr className="campo" >
            <td><input id="dataemi" name="dataemi" type="date" placeholder="Data de Emissão"  /></td>
          </tr>
          <tr className="campo">
            <td><input id="proximaleitura" name="proximaleitura" type="number" placeholder="Proxima leitura" /></td>
          </tr>
        </fieldset>
        <fieldset className="grupo">
          <tr className="campo">
            <td><input id="PConsumo" name="PConsumo" type="data" placeholder="Periodo de Consumo" /></td>
          </tr>
          <tr className="campo">
            <td><input id="VtConsumo" name="VtConsumo" type="number" placeholder="Valor total de Consumo" /></td>
          </tr>
          <tr className="campo">
            <td><input id="taxa" name="taxa" type="number" placeholder="Taxa de Regulação" /></td>
          </tr>
        </fieldset>
        <fieldset className="grupo">
          <tr className="campo">
            <td> <input id="datavencimento" name="datavencimento" type="data" placeholder="Data de Vencimento"  /></td>
          </tr>
          <tr className="campo">
            <td> <input id="TLigação" name="TLigação" type="text" placeholder="Taxa de ligação" /></td>
          </tr>
          <tr className="campo">
            <td><input id="MediaConsumo" name="MediaConsumo" type="number"  placeholder="Media de Consumo" /></td>
          </tr>
        </fieldset>
      </table>
        <div className="bt-container">
          <button type="submit" className="cadastrar" id="botao_cad">Enviar</button>
          <button type="submit" className="cadastrar" id="upload">Upload</button>
        </div>
      </form>
      </div>
    </section>
        </AreaForm>
    )
}

export default Form;