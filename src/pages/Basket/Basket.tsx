import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'
import { ProductContext } from '../../contexts/ProductContext'

const Basket: React.FC = () => {
    const cart = useContext(ProductContext);
    let priceArray: number[] = [];
    return (
        <>
            <h1>Your Basket</h1>

            {cart.inCart.map((itemId) => {
                const addedItem = cart.products.filter(item => item.id === itemId);
                console.log(addedItem)
                return addedItem.map((item) => {
                    priceArray.push(item.price)
                    return (<h3>{item.name} - {item.price}</h3>)
                });
            })}
            <h2>Total Price : {priceArray.reduce((acc, currentValue) => { return acc + currentValue }, 0)}</h2>
        </>
    )
}
export default Basket
