import React from 'react'
import { HeartOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const NavbarWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    height:100px;
`
const InputWrapper = styled.input`
    width: 30%;
    height: 50px;
    border-radius: 50px;
    border:none;
    box-shadow: 0px 0px 12px 0px #e2e2e2;
    outline: none;
    padding-left: 12px;
`
const IconWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 50px;
    margin-left :15px;
    margin-right: 20px;
`
const iconStyle = {
    fontSize: '24px',
}

const Navbar: React.FC = () => {
    return (
        <NavbarWrapper>
            <InputWrapper type='textbox' placeholder='Search Product here' autoFocus={true} />
            <IconWrapper><HeartOutlined style={iconStyle} /></IconWrapper>
            <IconWrapper><ShoppingCartOutlined style={iconStyle} /></IconWrapper>
        </NavbarWrapper>
    )
}
export default Navbar