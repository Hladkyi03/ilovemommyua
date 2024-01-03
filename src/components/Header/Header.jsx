import './Header.scss';
import logo from '../../media/img/logo.png'
import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom';
import CartSvg from '../../media/icons/Cart.png';
import ProfileSvg from '../../media/icons/Profile.png';

export const Header = ({ setModalEnabled }) => {
  const handleOnClick = () => {
    setModalEnabled(true);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/home">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>

          <Nav />

          <div className="header__right-wrapper">
            <div className="header__search-block">
              <input
                type="text"
                className="header__search"
                placeholder="Пошук"
              />
            </div>


            <div className="header__buttons-wrapper">
              <Link to="/cart" >
                <button className="header__button">
                  <img src={CartSvg} alt="cart" className="header__icon" />
                </button>
              </Link>

              <button className="header__button" onClick={handleOnClick}>
                <img src={ProfileSvg} alt="profile" className="header__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
