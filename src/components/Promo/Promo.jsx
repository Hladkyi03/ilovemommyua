import './Promo.scss';
import image from '../../media/img/cute-stylish-children-white-1 1 (0-00-00-00).png'

export const Promo = ({
  modificator = '',
  leftText,
  rightText,
}) => {
  return (
    <div className="promo">
      <div className="container">
        <div className={`promo__background ${modificator}`}>
          <div className="promo__wrapper">
            <p className="promo__left-text">
              {leftText}
            </p>


            <p className="promo__right-text">
              {rightText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
