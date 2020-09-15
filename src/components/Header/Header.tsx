import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.h1`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    box-shadow : 0px 0px 12px 0px #e2e2e2;
    position: sticky;
`

const Header: React.FC = () => {
    return (
        <HeaderWrapper><Link to='/'>Fruits Online!!</Link></HeaderWrapper>
    )
}
export default Header