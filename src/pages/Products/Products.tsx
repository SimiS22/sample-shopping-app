import React, { createContext, useState, useContext } from 'react'
import { productDetails } from '../../data';
import { HeartOutlined, HeartFilled, FrownOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import './Product.scss'
import { ProductContext } from '../../contexts/ProductContext';

const itemWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;    
`
const Product: React.FC = () => {
    const ProductStore = useContext(ProductContext);

    const handleCart = (id: number) => () => {
        ProductStore.addToCart?.(id)
    }

    const handleLikes = (id: number) => () => {
        ProductStore.isLiked?.(id)
    }
    return (
        <div className='wrapper'>{
            ProductStore.products.map((item, index) => {
                return (
                    <div key={index} className='itemWrapper'>
                        <div className='imageWrapper'>
                            <img src={item.image} />
                            <div className='like' onClick={handleLikes(item.id)}>{ProductStore.liked.includes(item.id) ? <HeartFilled /> : <HeartOutlined />}</div>
                        </div>
                        <div className='itemDetails'>
                            <div>
                                <h3>{item.name}</h3>
                                <h4>{item.price}€/kg</h4>
                            </div>
                            <div className='basket'>
                                <button onClick={handleCart(item.id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }</div>
    )
}
export default Product