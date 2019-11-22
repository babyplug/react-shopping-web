import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ProductDetail from './ProductDetail'
import ProductList from './ProductList'
import AuthRoute from '../../components/AuthRoutes'
import CreateProduct from './CreateProduct'
import EditProduct from './EditProduct'

export default () => (
  <Switch>
    <Route exact path="/products" component={AuthRoute(ProductList)} />
    <Route exact path="/products/new" component={CreateProduct} />
    <Route exact path="/products/:id" component={ProductDetail} />
    <Route exact path="/products/:id/edit" component={EditProduct} />
  </Switch>
)
