import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 2px solid #fff; 
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

export const TopBackground = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`;

export const StyledLink = styled(NavLink)`
    font-size: 22px;
    color: #fff;

    &.active {
        border-bottom: 2px solid #fff; 
    }

    &:not(:last-child) {
        margin-right: 22px;
    }
`;