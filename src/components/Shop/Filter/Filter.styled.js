import styled from 'styled-components';


export const FiterSection = styled.div`
    padding-bottom: 36px;
    padding-top: 36px;
`;

export const FiterContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1280px;
`;

export const TagsList = styled.ul`
    display: flex;
    justify-content: space-around;
    gap: 16px;
`;

export const TagsItem = styled.li`
    
`;

export const Tag = styled.button`

    border-radius: 8px;
    padding: 8px;
    text-transform: uppercase;
    font-family: Pangolin;
    font-size: 18px;
    background-color: rgba(241, 33, 45, 0.5);
    border: 2px solid rgba(241, 33, 45, 0.5);
    color: #fff;

    &:hover,
    &:focus,
    &:active {
        background-color: #fff;
        border: 2px solid #EBF00E;
        color: #F60C36;
    };
`;