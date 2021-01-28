import Styled from "styled-components";
import Check from "assets/img/check.svg"

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

export const RadioContainer = Styled.div`
    display: flex;
    justify-content: center;
    & > *{
        margin: 0 25px;
    }
    input[type=checkbox]:not(old):checked + label:before, 
    input[type=radio]:not(old):checked + label:before, 
    input[type=checkbox]:not(old):checked + span + label:before, 
    input[type=radio]:not(old):checked + span + label:before {
        content: url(${Check});
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 24px;
        font-size: 1.5rem;
        color: #acd373;
    }
    .radio{
        display: flex;
        flex-direction: column;
        input[type="radio" i]{
            visibility: hidden;
        }
        label{
            position: relative;
            width: 160px;
            height: 160px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #272D3B33;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h3{
                font-size: 26px;
                font-weight: 500;
                color: #272D3B;
                margin: 0;
                margin-top: 12px;
            }
        }
    }
`;
