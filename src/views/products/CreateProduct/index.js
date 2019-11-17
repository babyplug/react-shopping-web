import React, { Fragment } from 'react'

import Form from '../components/Form'
import BaseHero from '../../../components/BaseHero'

import { createProduct } from '../../../actions/products'

const handleCreateProduct = (values, dispatch) => {
  const payload = { ...values, coverImage: '' }

  dispatch(createProduct(payload))
}
const CreateProduct = () => {
  return (
    <Fragment>
      <BaseHero title="Create new product" />
      <Form onSubmit={handleCreateProduct} />
    </Fragment>
  )
}

export default CreateProduct
