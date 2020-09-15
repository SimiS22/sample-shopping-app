import React, { createContext, useState, useContext } from 'react'
import { productDetails } from '../../data';
import { HeartOutlined, HeartFilled, FrownOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import './Product.scss'
import { CartContext } from '../../CartContext'

export const ProductContext = createContext(productDetails);

const itemWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;    
`

const Product: React.FC = () => {
    const [liked, setLiked] = useState(false)
    const handleLikeClick = () => {
        liked ? setLiked(false) : setLiked(true);
    }

    const [cart, setCart] = useContext(CartContext)
    const addToCart = () => {

    }

    return (
        <div className='wrapper'>{
            productDetails.map((item, index) => {
                return (
                    <div key={index} className='itemWrapper'>
                        <div className='imageWrapper'>
                            <img src={item.image} />
                            <div className='like' onClick={handleLikeClick}>{liked ? <HeartFilled /> : <HeartOutlined />}</div>
                        </div>
                        <div className='itemDetails'>
                            <div>
                                <h3>{item.name}</h3>
                                <h4>{item.price}€/kg</h4>
                            </div>
                            <div className='basket'>
                                <button onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }</div>
    )
}
export default Product