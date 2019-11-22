import React from 'react'
import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'
import BaseHero from '../../components/BaseHero'

import ProductItem from './components/ProductItem'
import { findAll } from '../../actions/products'
import Loading from '../../components/Loading'

const HomePage = ({ products, isFetching }) => {
  if (isFetching) {
    return <Loading />
  }

  return (
    <div className="home">
      <BaseHero />

      <section className="section home-products">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <h2 className="title">Our Products</h2>
            </div>
          </div>

          <div className="columns is-multiline">
            {products &&
              products.map(product => {
                const linkToDetail = `/products/${product.id}`

                return (
                  <div key={product.id} className="column is-4">
                    <ProductItem product={product} to={linkToDetail} />
                  </div>
                )
              })}
          </div>
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

export default compose(connect(mapStateToProps), withLifeCycle)(HomePage)
