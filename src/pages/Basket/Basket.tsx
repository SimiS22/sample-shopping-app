import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'

const Basket: React.FC = () => {
    const [cart, setCart] = useContext<any>(CartContext);
    const totalPrice = cart.reduce((acc: number, currentItem: any) => {
        return acc + currentItem.price;
    }, 0)
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <h4>Total Price : {totalPrice}</h4>
        </div>
    )
}
export default Basket
