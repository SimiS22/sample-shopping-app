import React, { useState } from 'react'

export const CartContext = React.createContext([]);

export const CartProvider: React.FC<any> = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={cart}>
            {props.children}
        </CartContext.Provider>
    )
}

