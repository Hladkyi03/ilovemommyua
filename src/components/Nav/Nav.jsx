import { Link } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/home" className="nav__link">
            Головна
          </Link>
        </li>
        <li className="nav__item">
          <Link to="forGirls" className="nav__link">
            Дівчатам
          </Link>
        </li>
        <li className="nav__item">
          <Link to="forBoys" className="nav__link">
            Хлопцям
          </Link>
        </li>
        <li className="nav__item">
          <Link to="toys" className="nav__link">
            Іграшки
          </Link>
        </li>
        <li className="nav__item">
          <Link to="about-us" className="nav__link">
            Про нас
          </Link>
        </li>
      </ul>
    </nav>
  )
}
