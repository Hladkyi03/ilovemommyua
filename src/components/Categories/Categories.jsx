import './Categories.scss';
import girlsCategoryImage from '../../media/img/image 4.png';
import toysCategoryImage from '../../media/img/image 5.png';
import boysCategoryImage from '../../media/img/image 6.png';
import { Link } from 'react-router-dom';


export const Categories = () => (
  <div className="categories categories--margin-top-50">
    <div className="container">
      <div className="categories__wrapper">

        <Link to="/forGirls" className='categories__link'>
          <div className="categories__card categories__card--girls">

            <img
              src={girlsCategoryImage}
              alt="girl"
              className="categories__image categories__image--girls"
            />

            <div className="categories__card-wrapper categories__card-wrapper--girls">
              <p className="categories__card-title">
                Одяг для <span className="categories__big-text">дівчат</span>
              </p>
              <p className="categories__card-subtitle">
                Все для яскравих та стильних принцес
              </p>
            </div>
          </div>
        </Link>

        <Link to="/toys" className='categories__link'>
          <div className="categories__card categories__card--toys">
            <img
              src={toysCategoryImage}
              alt="girl"
              className="categories__image categories__image--toys"
            />

            <div className="categories__card-wrapper categories__card-wrapper--toys">
              <p className="categories__card-title categories__card-title--black">
                Іграшки
              </p>
              <p className="
            categories__card-subtitle
            categories__card-subtitle--toys"
              >
                Здивуй малюка в новому році
              </p>
            </div>
          </div>
        </Link>

        <Link to="/forBoys" className='categories__link'>
          <div className="categories__card categories__card--boys">
            <img
              src={boysCategoryImage}
              alt="girl"
              className="categories__image categories__image--boys"
            />

            <div className="categories__card-wrapper categories__card-wrapper--boys">
              <p className="categories__card-title">
                Одяг для <span className="categories__medium-text">хлопців</span>
              </p>
              <p className="categories__card-subtitle">
                Все для яскравих та стильних хлопців
              </p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  </div>

)
