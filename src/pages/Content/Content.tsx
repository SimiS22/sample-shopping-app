import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Basket from '../Basket/Basket'
import Product from '../Products/Products'
import Wishlist from '../Wishlist/Wishlist'

const Content: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window['scrollTo']({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [location.pathname])
    return (
        <Switch>
            <Route path='/' exact={true}>
                <Product />
            </Route>
            <Route path='/wishlist'>
                <Wishlist />
            </Route>
            <Route path='/shopping-cart'>
                <Basket />
            </Route>
        </Switch>
    )
}
export default Content