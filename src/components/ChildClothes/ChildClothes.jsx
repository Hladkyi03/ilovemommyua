import './ChildClothes.scss';
import questionImg from '../../media/img/question.png';
import clothesImg from '../../media/img/clothes.png';
import vector1 from '../../media/img/Vector 7.png';
import vector2 from '../../media/img/Vector 12.png';
import vector3 from '../../media/img/Vector 8.png';
import vector4 from '../../media/img/Vector 13.png';
import aos from '../../utils/aos';

export const ChildClothes = () => (
  <>
    <div className="child-clothes">
      <img
        src={vector2}
        alt="1"
        className="child-clothes__bg-vector-white"
        data-aos="fade-up"
        data-aos-offset="250"
      />
      <img
        src={vector1}
        alt="1"
        className="child-clothes__bg-vector-orange"
        data-aos="fade-down"
        data-aos-offset="300"
      />

      <div className="container container--padding-inline-145">
        <div className="child-clothes__content-wrapper">
          <div className="child-clothes__left-wrapper" data-aos="fade-right">
            <h2 className="child-clothes__title">
              ДИТЯЧИЙ ОДЯГ
            </h2>

            <p className="child-clothes__subtitle">
              Дитячий брендовий одяг від I Love Mommy
            </p>

            <p className="child-clothes__info">
              Дитячий одяг – те, без чого не обійтися жодній дитині.
              Такі вироби повинні бути стильними, комфортними і приносити
              задоволення синові чи доньці. Інтернет-магазин I Love Mommy
              пропонує купити першокласний фірмовий дитячий одяг
              і взуття від відомих брендів за вигідними цінами.
            </p>
          </div>

          <div className="child-clothes__right-wrapper" data-aos="fade-left">
            <img src={clothesImg} alt="clothes" className="child-clothes__image" />
          </div>
        </div>
      </div>
    </div>

    <div className="why-we why-we--margin-top-430">
      <img
        src={vector3}
        alt="1"
        className="why-we__bg-vector-orange"
        data-aos="fade-down"
        data-aos-offset="300"
      />

      <img
        src={vector4}
        alt="1"
        className="why-we__bg-vector-white"
        data-aos="up"
        data-aos-offset="250"
      />

      <div className="container">
        <div className="why-we__content-wrapper">
          <div className="why-we__left-wrapper">
            <img
              src={questionImg}
              alt="clothes"
              className="why-we__image"
              data-aos="fade-right"
            />
          </div>

          <div className="why-we__right-wrapper" data-aos="fade-left">
            <h2 className="child-clothes__title">
              чому саме ми?
            </h2>

            <p className="child-clothes__subtitle">
              Компанія забезпечує відмінний і продуманий сервіс:
            </p>

            <ul className="why-we__benefits-list">
              <li className="why-we__list-item">
                Ввічливі і компетентні консультації менеджерів, допомога у виборі розмірів, моделей;
              </li>
              <li className="why-we__list-item">
                Зручні методи оплати товару, можна оплатити як післяплатою, так і на карту;
              </li>
              <li className="why-we__list-item">
                Кілька варіантів доставки по території України – Нова або Укр. пошта, а по Львову працює кур'єрська служба;
              </li>
              <li className="why-we__list-item">
                Регулярне проведення sale, розпродажів, що дозволяє ще більш вигідно замовити товар.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
)
