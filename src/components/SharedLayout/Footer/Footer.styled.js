import styled from 'styled-components';

export const FooterBox = styled.footer`
    padding-top: 16px;
    padding-bottom: 16px;
`;

export const Container = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    // justify-content: space-between;
    // gap: 16px; 
`;

export const Label = styled.label`
    font-size: 22px;
    color: #fff;
    margin-right: 20px;
`;

export const Input = styled.input`
    width: 250px;
    height: 30px;
    font-size: 18px;
    padding-left: 12px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 20px;
    background-color: transparent;
`;

export const Button = styled.button`
    border: 2px solid #fff;
    border-radius: 24px;
    padding: 4px;
    width: 50px;
    color: #fff;

    &:hover, 
    &:focus {
        background-color: #fff;
        
    }
`;

export const BtnContent= styled.span`
    color: #fff;

    ${Button}:hover & {
        color: #F60C36;
    }
`;

export const BottomBackground = styled.img`
    position: absolute;
    z-index: -1;
    bottom: 0px;
    right: 0px;
`;