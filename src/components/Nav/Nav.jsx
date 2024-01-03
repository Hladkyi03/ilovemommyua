import { NavLink } from 'react-router-dom';
import './Nav.scss';
import classNames from 'classnames';

const handleIsActive = ({ isActive }) => (
  classNames('nav__link', { 'nav__link--active': isActive }));

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/home" className={handleIsActive}>
            Головна
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/forGirls" className={handleIsActive}>
            Дівчатам
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/forBoys" className={handleIsActive}>
            Хлопцям
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/toys" className={handleIsActive}>
            Іграшки
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about-us" className={handleIsActive}>
            Про нас
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
