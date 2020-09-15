import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

const Wishlist: React.FC = () => {
    const likedProducts = useContext(ProductContext)
    return (
        <div>
            <h1>Your Wishlist</h1>
            {likedProducts.liked.map((itemId) => {
                const likedItem = likedProducts.products.filter(item => item.id === itemId);
                return likedItem.map((item) => <h3>{item.name}</h3>)

            })}
        </div>
    )
}
export default Wishlist