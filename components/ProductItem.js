/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>

      <div>
        <Link href={`/product/${product.slug}`} className="text-1g">
          <h2> {product.name} </h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p> ${product.price} </p>
        <button className="primary-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
