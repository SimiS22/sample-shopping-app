import React, { useContext } from 'react'
import { HeartOutlined, HeartFilled} from '@ant-design/icons'

import './Product.scss'
import { ProductContext } from '../../contexts/ProductContext';

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
                            <img src={item.image} alt={item.name} />
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