import { useState } from 'react';
import './ProductInfo.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const ProductInfo = ({ product }) => {
  const { id, title, price, description, availableSizes, characteristics, delivery } = product;

  const [activeTab, setActiveTab] = useState(0);
  const [activeSize, setActiveSize] = useState(2);
  const [activeInfo, setActiveInfo] = useState(description);
  return (
    <div className="product-info">
      <div className="product-info__container">
        <p className="product-info__title">
          {title}
        </p>

        <p className="product-info__code">
          КОД :{id}
        </p>

        <div className="product-info__price">
          {price}
        </div>

        <div className="product-info__tabs">
          <button
            className={cn("product-info__tab", {
              "product-info__tab--active": activeTab === 0,
            })}
            onClick={() => { setActiveTab(0); setActiveInfo(description) }}
          >
            ОПИС
          </button>

          <button
            className={cn("product-info__tab", {
              "product-info__tab--active": activeTab === 1,
            })}
            onClick={() => { setActiveTab(1); setActiveInfo(characteristics) }}
          >
            характеристики
          </button>

          <button
            className={cn("product-info__tab", {
              "product-info__tab--active": activeTab === 2,
            })}
            onClick={() => { setActiveTab(2); setActiveInfo(delivery) }}
          >
            доставка
          </button>
        </div>

        <ul className="product-info__list">
          {activeInfo.map(info => (
            <li className='product-info__list-item' key={info}>
              {info}
            </li>
          ))}
        </ul>

        <div className="product-info__bottom-wrapper">
          <p className="product-info__bottom-title">
            розмір
          </p>

          <div className="product-info__available-sizes">
            <button
              className={cn("product-info__button-size", {
                "product-info__button-size--active": activeSize === 2,
              })}
              disabled={!availableSizes.includes(2)}
              onClick={() => setActiveSize(2)}
            >
              2 роки
            </button>

            <button
              className={cn("product-info__button-size", {
                "product-info__button-size--active": activeSize === 6,
              })}
              disabled={!availableSizes.includes(6)}
              onClick={() => setActiveSize(6)}
            >
              6 років
            </button>

            <button
              className={cn("product-info__button-size", {
                "product-info__button-size--active": activeSize === 9,
              })}
              disabled={!availableSizes.includes(9)}
              onClick={() => setActiveSize(9)}
            >
              9 років
            </button>

            <button
              className={cn("product-info__button-size", {
                "product-info__button-size--active": activeSize === 11,
              })}
              disabled={!availableSizes.includes(11)}
              onClick={() => setActiveSize(11)}
            >
              11 років
            </button>
          </div>

          <div className="product-info__bottom-buttons">
            <button className="product-info__button">
              в кошик
            </button>

            <Link to="/payment">
              <button className="product-info__button">
                замовити
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
