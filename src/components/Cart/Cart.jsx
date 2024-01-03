import { Link } from 'react-router-dom';
import './Cart.scss';

export const Cart = () => (
  <div className="cart">
    <div className="container">
      <p className="cart__title">
        кошик
      </p>

      <p className="cart__info">
        Не відкладайте оформлення замовлення - товар залишений у корзині не резервується за Вами
      </p>

      <p className="cart__warning">
        У вас немає товарів у кошику.
      </p>

      <div className="cart__products-wrapper">
        <div className="cart__void-block">
          <Link to="/home" className='cart__link'>
            +
          </Link>
        </div>

        <div className="cart__void-block">
          <Link to="/home" className='cart__link'>
            +
          </Link>
        </div>

        <div className="cart__void-block">
          <Link to="/home" className='cart__link'>
            +
          </Link>
        </div>
      </div>

      <button className="cart__confirm-button">
        <Link to="/home" className='cart__link'>
          ПЕРЕЙТИ ДО ПОКУПОК
        </Link>
      </button>
    </div>
  </div>
)
