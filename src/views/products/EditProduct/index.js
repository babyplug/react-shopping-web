import React, { Fragment } from 'react'
import { lifecycle, compose } from 'recompose'
import { connect } from 'react-redux'

import Form from '../components/Form'
import BaseHero from '../../../components/BaseHero'
import Loading from '../../../components/Loading'

import { findById, updateProduct } from '../../../actions/products'

const handleSubmit = (id, values, dispatch) => {
  const coverImage = values.coverImage.imageUrl
    ? values.coverImage.imageUrl
    : values.coverImage

  const payload = { ...values, coverImage }

  // console.log('values ->', values)
  // console.log('payload ->', payload)

  dispatch(updateProduct(id, payload))
}
const EditProduct = ({ product, isFetching, match }) => {
  if (isFetching) {
    return <Loading />
  }

  const { id } = match.params

  return (
    <Fragment>
      <BaseHero />
      <Form
        onSubmit={(values, dispatch) => handleSubmit(id, values, dispatch)}
        initialValues={product}
        coverImage={product.coverImage}
      />
    </Fragment>
  )
}

const withLifeCycle = lifecycle({
  componentDidMount() {
    const { match, dispatch } = this.props
    const { id } = match.params

    dispatch(findById(id))
  }
})

const mapStateToProps = state => ({
  isFetching: state.products.detail.isFetching,
  product: state.products.detail.data
})

export default compose(connect(mapStateToProps), withLifeCycle)(EditProduct)
