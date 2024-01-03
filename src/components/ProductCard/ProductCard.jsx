import cn from 'classnames';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product, modificators }) => {
  const { imgSrc, price, title, id } = product;

  return (
    <div className={cn('product-card', modificators)}>
      <Link to={`/product/${id}`}>
        <div className="product-card__image-wrapper">
          <img src={imgSrc} alt="product" className="product-card__image" />
        </div>
      </Link>

      <p className="product-card__title">
        {title}
      </p>

      <p className="product-card__price">
        {price}₴
      </p>

      <button className="product-card__button">додати в кошик</button>
    </div>
  )
}
