import React from 'react'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
        <div className="product-card">
          <img 
            src={image[0]}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
    </div>
  )
}

export default Product