import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import DropzoneUploader from '../../../components/DropzoneUploader'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: props.coverImage
    }
  }

  handleUploadFile = value => {
    this.setState({
      imageUrl: value.imageUrl
    })
  }

  render() {
    const { imageUrl } = this.state
    const { handleSubmit } = this.props
    return (
      <div className="container">
        <div className="columns is-centered">
          <form className="column is-8" onSubmit={handleSubmit}>
            <div class="field">
              <label class="label">Product Name</label>
              <div class="control">
                <Field
                  component="input"
                  name="name"
                  type="text"
                  className="input"
                  placeholder="e.g. Product Name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Image: </label>
              <Field
                name="coverImage"
                component={DropzoneUploader}
                onChange={this.handleUploadFile}
                handleProgress={progess => {
                  console.log(progess)
                }}
              />
              {imageUrl ? (
                <img
                  src={imageUrl}
                  className="preview-image-box"
                  alt="Preview Cover"
                />
              ) : null}
            </div>

            <div class="field">
              <label class="label">Price</label>
              <div class="control">
                <Field
                  component="input"
                  name="price"
                  className="input"
                  type="number"
                  placeholder="e.g. 2000"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Quantity</label>
              <div class="control">
                <Field
                  component="input"
                  name="quantity"
                  class="input"
                  type="number"
                  placeholder="e.g. 50"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Category</label>
              <div class="control">
                <div class="select">
                  <Field name="category" component="select">
                    <option value="t-shirt">T-Shirt</option>
                    <option value="dress">Dress</option>
                  </Field>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <Field
                  component="textarea"
                  name="description"
                  className="textarea"
                  placeholder="e.g. Your product description"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">SKU</label>
              <div class="control">
                <Field
                  component="input"
                  name="sku"
                  class="input"
                  type="text"
                  placeholder="e.g. PRODUCT_NAME_01"
                />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link" type="submit">
                  Submit
                </button>
              </div>
              <div class="control">
                <Link to="/products" class="button is-text">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'product-form',
  enableReinitialize: true
})(Form)
