import React, { useState } from 'react'
import { productDetails } from '../../data';
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import styled from 'styled-components'
import './Product.scss'

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
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }</div>
    )
}
export default Product