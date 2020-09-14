import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Basket from '../Basket/Basket'
import Product from '../Products/Products'
import Wishlist from '../Wishlist/Wishlist'

const Content: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route>
                    <Product />
                </Route>
                <Route>
                    <Wishlist />
                </Route>
                <Route>
                    <Basket />
                </Route>
            </Switch>
        </div>
    )
}
export default Content