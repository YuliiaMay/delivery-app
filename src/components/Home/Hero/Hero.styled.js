import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroBox = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;   
`;

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

export const InfoBlock = styled.div`
    width: 600px;
    padding: 30px;
    background-color: #ffffffae;
    border-radius: 10% 50% 5% 15%;
`;

export const Title = styled.h1`
    font-family: Pangolin;
    font-weight: 500;
    font-size: 60px;
    margin-bottom: 36px;
    color: #F60C36;
`;

export const TextAbout = styled.p`
    font-family: Pangolin;
    font-weight: 300;
    font-size: 22px;
    color: #6F0518;
    margin-bottom: 30px;
`;

export const TextDelivery = styled.p`
    font-family: Pangolin;
    font-weight: 500;
    font-size: 24px;
    color: #300109;
    margin-bottom: 60px;
`;

export const GoShopLink = styled(Link)`
    border: 2px solid #F60C36;
    border-radius: 20px;
    width: 300px;
    font-family: Righteous;
    font-size: 20px;
    text-align: center;
    padding: 12px;
    color: #F60C36;

    &:hover,
    &:focus {
        background-color: #F60C36;
        color: #fff;
    }
`;

export const HeroImg = styled.img`
    width: 600px;
    
`;
