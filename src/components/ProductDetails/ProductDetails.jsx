import { useState } from 'react';
import './ProductDetails.scss';
import cn from 'classnames';
import { ProductInfo } from '../ProductInfo/ProductInfo';
import { PhotoGallery } from '../PhotoGallery/PhotoGallery';

export const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <PhotoGallery product={product} />

      <ProductInfo product={product} />
    </div>
  )
}
