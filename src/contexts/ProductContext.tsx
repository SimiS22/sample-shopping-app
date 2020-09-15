import React, { createContext, useState } from 'react'
import { productDetails } from '../data'


interface ProductContextType {
    products: typeof productDetails,
    liked: number[],
    inCart: number[],
    addToCart?: (id: number) => void,
    isLiked?: (id: number) => void
}

export const ProductContext = createContext<ProductContextType>({
    products: [],
    liked: [],
    inCart: [],
})

export const ProductContextProvider: React.FC = ({ children }) => {
    const [likes, setLikes] = useState<number[]>([])
    const [inCart, setInCart] = useState<number[]>([]);

    const isLiked = (id: number) => {
        setLikes(likes.includes(id) ? likes.filter(value => value !== id) : [...likes, id]);
    }

    const addToCart = (id: number) => {
        setInCart([...inCart, id])
    }

    return (
        <ProductContext.Provider value={{ products: productDetails, liked: likes, inCart: inCart, addToCart, isLiked }}>
            {children}
        </ProductContext.Provider>
    )
}