import styled from 'styled-components';

export const Card = styled.li`
    max-width: calc((100% - 2 * 30px) / 3);
    border-radius: 8px;
    border: 2px solid #EBF00E;
    padding: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;

    &:hover,
    &:focus {
        box-shadow: rgba(246, 12, 54, 0.91) 5px 5px, rgba(241, 33, 45, 0.7) 10px 10px, rgba(231, 169, 76, 0.66) 15px 15px, rgba(235, 240, 14, 0.23) 20px 20px;
    }
`;

export const ProductImg = styled.img`
    width: 380px;
    height: 320px;
    border-radius: 8px;
    border-bottom: 4px solid #EBF00E;
`;

export const InfoBox = styled.div`
    padding-left: 22px;
    padding-right: 22px;
    font-family: Pangolin;
    font-size: 32px;
    line-height: calc(42 / 32);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ProductName = styled.p`
    color: #F60C36;
`;

export const Price = styled.p`
    color: #6F0518;
`;

export const OrderBox = styled.div`
    padding-left: 22px;
    padding-right: 22px;
    font-family: Pangolin;
    font-size: 32px;
    line-height: calc(42 / 32);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Button = styled.button`
    background-color: rgba(235, 240, 14, 0.23);
    border: 2px solid #EBF00E;
    border-radius: 12px;
    width: 100px;
    height: 36px;
    text-transform: uppercase;
    color: #F60C36;
    font-size: 18px;
    font-family: Pangolin;

    &:hover,
    &:focus {
        background-color: rgba(235, 240, 14, 1);
        border: 2px solid #fff;
        // color: #fff;
    }
`;

export const AmountInput = styled.input`
    width: 50px;
    text-align: center;
    color: #F60C36;
    font-size: 18px;
    font-family: Pangolin;
`;