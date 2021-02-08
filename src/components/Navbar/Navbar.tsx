import React, { useContext } from 'react'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Badge } from 'antd'
import { ProductContext } from '../../contexts/ProductContext'

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
    margin-left :30px;
    margin-right: 60px;
`
const iconStyle = {
    fontSize: '24px',
}

const Navbar: React.FC = () => {
    const nav = useContext(ProductContext)
    return (
        <NavbarWrapper>
            <InputWrapper type='textbox' placeholder='Search Product here' autoFocus={true} />
            <IconWrapper ><Link to='/wishlist'><Badge count={nav.liked.length}><HeartOutlined style={iconStyle} /></Badge></Link></IconWrapper>
            <IconWrapper><Link to='/shopping-cart'><Badge count={nav.inCart.length}><ShoppingCartOutlined style={iconStyle} /></Badge></Link></IconWrapper>
        </NavbarWrapper>
    )
}
export default Navbar