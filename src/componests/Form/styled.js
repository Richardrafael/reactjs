import styled from 'styled-components';

export const AreaForm = styled.div`
position: static;
float: right;
width: 80%;
height: 135vh;
background: #FFFFFF;


.h{
    background-color: ffff;
    text-align : center;
    padding : 10px;
    font-size : 20px;
    position: fixed;
    width: 100%;
}
.cliente{
display: flex;
align-items: center;
// flex-direction: column;
margin: 30px 0px 90px;
}
#fornecimento,
#CNPJ,
#CPF,
#economias,
#condicao,
#VtAgua,
#multa,
#valortributos,
#concessionaria,
#documento,
#nome,
#consumo,
#Vlesgoto,
#jurosm,
#Vt,
#dataemi,
#proximaleitura,
#PConsumo,
#VtConsumo,
#taxa,
#datavencimento,
#TLigação,
#MediaConsumo,
#dataapre {
  height: 35px;
  width: 250px;
  border: none;
  border-radius: 5px;
  background-color: #e1e1e1;
  flex-direction: row-reverse;
  padding: 4px;
}

/* botão - cadastrar */
#botao_cad {
  width: 150px;
  height: 30px;
  background-color: #364e73;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 16px;
  cursor: pointer;
}
#botao_cad:hover {
  background: #22334d;
  box-shadow: #22334d;
  text-shadow: none;
}

/* tabela do formulário */
.bt-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0px 90px;
}
#tab_cadastro {
  display: flex;
  justify-content: center;
}
`;