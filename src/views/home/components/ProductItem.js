import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product, to }) => (
  <div className="card">
    <Link to={to}>
      <figure className="image is-3by2">
        <img src={product.coverImage} alt={product.name} />
      </figure>
    </Link>
  </div>
)

export default ProductItem
