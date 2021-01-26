import Styled from "styled-components";

export const Illustration = Styled.div`
    height: 648px;
    width: 600px; 
    background-color: #F9FAFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;  
    box-shadow: 0px 3px 20px #00000008;
    border-radius: 5px 0px 0px 5px;
    box-sizing: border-box;
    opacity: 1;
    .logo{
        margin: 26px 0 105px 26px;
    }
  svg {
    margin: 0 auto;
  }
`;

export const FormContainer = Styled.div`
    height: 648px; 
    width: 600px;
    padding: 78px 38px 41.5px 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 26px;
        color: #2E384D;
        font-weight: 600;
        margin: 0;
    }
    h4{
        font-size: 14px;
        color: #2E384D;
        font-weight: 300;
        margin: 10px auto 36px auto;
        width: 449px;
        line-height: 1.3;
    }
`;