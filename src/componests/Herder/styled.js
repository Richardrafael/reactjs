import styled from 'styled-components';

export const AreaHeader = styled.div`
position: absolute;
width: 270px;
height: 920.44px;

background: #1DD9B1;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: sans-serif;

    @media screen and (max-height: 450px) {
        .menu {
          padding-top: 15px;
        }
        .menu a {
          font-size: 18px;
        }
      }
      /* //////////////// menu ////////////// */
      .container {
        display: flex;
      }
      .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
      
        background-color: #1DD9B1;
      
        position: sticky;
        top: 70px;
      
        width: 280px;
        height: 135vh;
      
        padding: 25px 20px;
      }
      .menu a,
      .dropdown-btn {
        padding: 6px 8px 6px 16px;
      
        text-decoration: none;
      
        font-size: 20px;
        color: black;
      
        display: block;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        outline: none;
      
        margin-bottom: 20px;
      }
      
      /* cor quando passa o mouse */
      .menu a:hover,#select:hover,.dropdown-btn:hover {
        color: blue;
      }
      
      /* cor do fundo quando clica na seta */
      .active {
        background-color: #1DD9B1;
        color: black;
      }
      
      /* cor do fundo  */
      .dropdown-container {
        display: none;
        background-color: #1DD9B1;
        padding-left: 8px;
      }
      
      .dropdown-btn {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }
      .dropdown-btn img {
        margin-left: 35px;
      }
      
      
      /* Margem para o conteudo ficar visivel */
      section {
        display: flex;
        flex-direction: column;
        padding: 20px;
      
        flex-grow: 1;
      }
      #select {
        color: black;
      }
      
      
      
      /* botao sair */
      .sair {
        padding: 10px 17px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
       transition-duration: 0.4s;
        
      }
      
      .sair {
        background-color:black;
        color: white;
        border: none;
      }
      
      .sair:hover {
        background-color: red;
        color: white;
      }
      /* distancia do icone para a palavra */
      #casa,#conta,#energia,#agua,#contratos,
      #concessionarias,#unidade,#relatorio,#controle,
      #alertas,#logs,#configuracoes{
        padding-right: 5px;
        
      }
      /* botao sair */
      
      
      .ca:hover {
        background-color: write;
        color: blue;
      }
  


}
    .logo{
        flex: 1;

        img{
            width: 45px;
        }
    }
    .esc {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 20px;
        color: black;
        display: block;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        outline: none;
        margin-bottom: 20px;
    }
        .bi-house{ 
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0px 16px;
            position: absolute;
            width: 208.59px;
            height: 40px;
    }
    .dropdown-btn {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .container {
        display: flex;
    }

    .menu{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1DD9B1;
        position: sticky;
        top: 70px;
        width: 280px;
        height: 135vh;
        font-family: sans-serif;
        padding: 25px 20px;
    }

    #select {
        color: black;
    }

    nav{
        ul{
            display:flex;
        }

        li{
            list-style: none;
            margin-left: 20px;

        }
        
    }



`
