import './PopularCollections.scss';
import { novinkiArray } from '../../data/novinki';
import { ProductCard } from '../ProductCard/ProductCard';

export const PopularCollections = () => {
  return (
    <div className="popular-collections popular-collections--margin-top-64">
      <div className="container">
        <h2 className="popular-collections__title">
          популярні колекції
        </h2>

        <p className="popular-collections__subtitle">
          Неймовірні колекції цієї зими вже в наявності
        </p>

        <div className="popular-collections__products-wrapper">
          {novinkiArray.map(novinka => (
            <ProductCard
              product={novinka}
              modificators='product-card__margin-top-42'
              key={novinka.id}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
