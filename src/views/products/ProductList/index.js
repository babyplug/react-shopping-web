import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'

import { findAll } from '../../../actions/products'
import ProductItem from './components/ProductItem'
import BaseHero from '../../../components/BaseHero'

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <BaseHero />
      <section className="section product-data">
        <div className="container">
          <h2 className="title">Product List</h2>

          <div className="columns">
            <div className="column is-12">
              <Link to="/products/new" className="button is-info">
                Create
              </Link>
            </div>
          </div>

          {products &&
            products.map(product => {
              return <ProductItem product={product} />
            })}
        </div>
      </section>
    </div>
  )
}

const withLifeCycle = lifecycle({
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(findAll())
  }
})

const mapStateToProps = state => ({
  isFetching: state.products.list.isFetching,
  products: state.products.list.data
})

export default compose(connect(mapStateToProps), withLifeCycle)(ProductList)
