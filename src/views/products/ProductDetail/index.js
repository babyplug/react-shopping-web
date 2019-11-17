import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'

import BaseHero from '../../../components/BaseHero'
import { findById } from '../../../actions/products'

const ProductDetail = ({ product }) => {
  return (
    <Fragment>
      <BaseHero />

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <figure>
                <img
                  className="image is4by3"
                  src={product.coverImage}
                  alt={product.name}
                />
              </figure>
            </div>

            <div className="column is-6">
              <div className="product-description">
                <div>
                  <p className="subtitle has-text-weight-bold">
                    {product.name}
                  </p>
                  <p className="price-text">Price: {product.price} Baht</p>
                  {!product.quantity || product.quantity === 0 ? (
                    <p>
                      <span className="tag is-danger">Out of stock</span>
                    </p>
                  ) : (
                    <p>
                      <strong>Available:</strong> {product.quantity} ea
                    </p>
                  )}

                  <p>{product.description}</p>
                  <p>
                    <strong>SKU: </strong>
                    {product.sku}
                  </p>
                  <p>
                    <strong>Categories: </strong>
                    {product.category}
                  </p>
                </div>

                <button className="button is-fullwidth is-primary is-large is-rounded has-text-weight-bold">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isFetching: state.products.detail.isFetching,
  product: state.products.detail.data
})

const withLifeCycle = lifecycle({
  componentDidMount() {
    const { dispatch, match } = this.props
    const { id } = match.params

    console.log('id', id)
    dispatch(findById(id))
  }
})

// const map

// export default connect(mapStateToProps)(ProductDetail)

export default compose(connect(mapStateToProps), withLifeCycle)(ProductDetail)
