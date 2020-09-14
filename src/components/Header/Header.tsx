import React from 'react'
import styled from 'styled-components';

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
        <HeaderWrapper>Fruits Online!!</HeaderWrapper>
    )
}
export default Header