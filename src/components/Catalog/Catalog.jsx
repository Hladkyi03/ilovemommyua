import { Link, useSearchParams } from 'react-router-dom';
import { ProductsPagination } from '../ProductsPagination/ProductsPagination';
import './Catalog.scss';
import cn from 'classnames';
import { getSearchWith } from '../../utils/getSearchWith';
import { useState } from 'react';
import { AsideMenu } from '../AsideMenu/AsideMenu';

export const Catalog = ({ products, categories }) => {
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');

  const page = Number(searchParams.get('page')) || 1;
  const currentCategory = searchParams.get('category') || 'new';

  const visibleProducts = products
    .filter(clothes => clothes.type === currentCategory)
    .filter(clothes => clothes.title.includes(searchQuery));

  return (
    <div className="catalog">
      <div className="container container--padding-inline-71">
        <div className="catalog__topbar">
          <h3 className="catalog__title">
            Категорії
          </h3>

          <div className="header__search-block">
            <input
              type="text"
              className="header__search"
              placeholder="Пошук"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="catalog__content-wrapper">
          <AsideMenu categories={categories} />

          <div>
            <ProductsPagination
              products={visibleProducts}
              total={visibleProducts.length}
              perPage={9}
              currentPage={page}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
