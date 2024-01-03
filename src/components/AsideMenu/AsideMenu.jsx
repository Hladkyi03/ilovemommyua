import { Link, useSearchParams } from 'react-router-dom';
import './AsideMenu.scss';
import { useState } from 'react';
import { getSearchWith } from '../../utils/getSearchWith';
import cn from 'classnames';

export const AsideMenu = ({ categories }) => {
  const [searchParams] = useSearchParams();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [minAge, setMinAge] = useState(5);
  const [currentMaxAge, setCurrentMaxAge] = useState(13);

  const currentCategory = searchParams.get('category') || 'new';

  const handleBtnClick = (slug) => {
    if (currentCategory === slug) {
      return searchParams.toString();
    }

    let newSearchParams = '';

    newSearchParams = getSearchWith(searchParams, 'page', '1').toString();

    return getSearchWith(newSearchParams, 'category', slug).toString()
  }

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleRangeChange = (event) => {
    const value = event.target.value;

    setCurrentMaxAge(value);
  };

  const handleAgeChange = (minimalAge, maximunAge) => {
    setMinAge(minimalAge);
    setCurrentMaxAge(maximunAge);
  }

  return (
    <aside className="aside-menu__categories">
      <ul className="aside-menu__categories-list">

        {categories.map(category => (
          <li
            className={cn('aside-menu__categories-item', {
              'aside-menu__categories-item--active': category.slug === currentCategory
            })}
            key={category.slug}
          >
            <Link
              to={{ search: handleBtnClick(category.slug) }}
              className='aside-menu__categories-link'
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

      <p className="aside-menu__categories-age-title">
        Вік
      </p>

      <input
        type="range"
        min={minAge}
        max={13}
        value={currentMaxAge}
        className="aside-menu__categories-age"
        onChange={(e) => handleRangeChange(e)}
      />

      <div
        className="aside-menu__categories-bottom-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aside-menu__categories-info">
          {`Від ${minAge} до ${currentMaxAge} років`}
        </div>

        <div className="aside-menu__categories-dropdown">
          Змінити

          {isDropdownOpen && (
            <ul className="aside-menu__categories-dropdown-list">
              <li
                className="aside-menu__categories-dropdown-list-item"
                onClick={() => handleAgeChange(5, 7)}
              >
                5-7 років
              </li>

              <li
                className="aside-menu__categories-dropdown-list-item"
                onClick={() => handleAgeChange(7, 9)}
              >
                7-9 років
              </li>

              <li
                className="aside-menu__categories-dropdown-list-item"
                onClick={() => handleAgeChange(9, 11)}
              >
                9-11 років
              </li>

              <li
                className="aside-menu__categories-dropdown-list-item"
                onClick={() => handleAgeChange(11,13)}
              >
                11-13 років
              </li>
            </ul>
          )}
        </div>
      </div>
    </aside>
  )
}
