import styled from 'styled-components';

export const Container = styled.div`
  *{
    margin: 0;
    color:  #e98862;
  }
  .cadastro{
    text-align: center;
    font-size: 1.3em;
  }
  .nome,.email,.senha,.admin{
    font-size: 1.3em;
    margin-top: 10px;
   }
  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    height: 440px;
    width: 430px;
    padding: 30px; 
    border-radius: 20px;
    background: rgba(255,255,255,0.6);
   }
   input{
    margin-bottom: 5px;
    margin-top: 0;
    font-size: 1em;
    height: 40px;
    width: 370px;
    background: #FFFFFF;
    border-radius: 10px; 
   }
   button{
    margin-top: 9px;
    width: 370px;
    height: 50px;
    background:  #e98862;
    border-radius: 50px;
    color: #FFFFFF;
    font-size: 1.4em;
   }
   a{
     text-align: center;
   }
  @media (max-width: 600px) {
    section{
    height: 430px;
    width: 330px;
    }
    input{
    width: 275px;
    }
    button{
    width: 275px;
   }
  }
  @media (max-width: 400px) {
    section{
    width: 270px;
    height: 430px;
    }
    input{
    width: 220px;
    }
    button{
    width: 220px;
   }
  }
  @media (max-width: 330px) {
    section{
    height: 460px;
    width: 220px;
    }
    input{
    width: 165px;
    }
    button{
    width: 165px;
   }
  }
`;
