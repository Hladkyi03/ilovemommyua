import { Link } from 'react-router-dom';
import './CatalogFooter.scss';

export const CatalogFooter = () => (
  <div className="catalog-footer">
    <div className="container">
      <h3 className="catalog-footer__title">
        ПОДАРУНКОВІ СЕРТИФІКАТИ
      </h3>

      <p className="catalog-footer__subtitle">
        отримай GIFT CARD на весь товар
      </p>

      <p className="catalog-footer__info">
        Зроби справжній подарунок для себе та сім’ї
      </p>

      <Link to="/certificates" className="catalog-footer__link">
        детальніше
      </Link>
    </div>
  </div>
)
