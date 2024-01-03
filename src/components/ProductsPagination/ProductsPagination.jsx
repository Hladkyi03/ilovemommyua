import './ProductsPagination.scss';
import cn from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../ProductCard/ProductCard';
import { getSearchWith } from '../../utils/getSearchWith';

function getNumbers(from, to) {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const ProductsPagination = ({
  products,
  total,
  perPage,
  currentPage,
}) => {
  const [searchParams] = useSearchParams();

  const buttonCount = total % perPage === 0
    ? Math.floor(total / perPage)
    : Math.floor((total / perPage) + 1);

  const pageNumbers = getNumbers(1, buttonCount);

  const visibleItems = products
    .slice(currentPage * perPage - perPage, currentPage * perPage);

  const handlePrevClick = () => {
    if (currentPage === 1) {
      return searchParams.toString();
    }

    return getSearchWith(searchParams, 'page', currentPage - 1).toString();
  };

  const handleNextClick = () => {
    if (currentPage === buttonCount) {
      return searchParams.toString();
    }

    return getSearchWith(searchParams, 'page', currentPage + 1).toString();
  };

  const handleBtnClick = (number) => {
    return getSearchWith(searchParams, 'page', number).toString();
  };

  return (
    <div className='products-pagination'>
      <div className='products-pagination__products-wrapper'>
        {visibleItems.map(novinka => (
          <ProductCard
            product={novinka}
            modificators='product-card__margin-top-15'
            key={novinka.id}
          />
        ))}
      </div>

      {buttonCount > 1 && (<ul className="products-pagination__buttons-list">
        {currentPage !== 1 && (
          <li className={cn('products-pagination__page-item')}
          >
            <Link
              data-cy="prevLink"
              className="products-pagination__page-link"
              to={{ search: handlePrevClick() }}
              aria-disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                <g clip-path="url(#clip0_375_3)">
                  <path d="M16.0003 2L2.45129 10.5811C1.8037 10.9912 1.83939 11.9475 2.51576 12.3082L16.0003 19.5" stroke="#F4634B" stroke-width="3" />
                </g>
                <defs>
                  <clipPath id="clip0_375_3">
                    <rect width="17" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>)}

        {pageNumbers.map(number => (
          <li
            key={number}
            className={cn('products-pagination__page-item', {
              'products-pagination__page-item--active': number === currentPage,
            })}
          >
            <Link
              data-cy="pageLink"
              className="products-pagination__page-link"
              to={{ search: handleBtnClick(number) }}
            >
              {number}
            </Link>
          </li>
        ))}

        {currentPage !== buttonCount && (
          <li className={cn('products-pagination__page-item')}
          >
            <Link
              data-cy="nextLink"
              className="products-pagination__page-link"
              to={{ search: handleNextClick() }}
              aria-disabled={currentPage === buttonCount}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
                <path d="M1 19.5L14.549 10.9189C15.1966 10.5088 15.1609 9.5525 14.4846 9.19177L1 2" stroke="#F4634B" stroke-width="3" />
              </svg>
            </Link>
          </li>)}
      </ul>)}
    </div>
  );
};
