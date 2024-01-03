import './Payment.scss';
import InputMask from 'react-input-mask';
import chipIcon from '../../media/icons/chip.png';
import visaIcon from '../../media/icons/visa-icon.png';
import { useState } from 'react';

export const Payment = () => {
  const [numberQuery, setNumberQuery] = useState('');
  const [nameQuery, setNameQuery] = useState('');
  const [cvvQuery, setCvvQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <main className="main main--payment-background main--padding-bottom-63">
      <div className="payment">
        <div className="container">
          <form className="payment__wrapper" action='/'>
            <div className="payment__card">
              <div className="payment__card-images">
                <img src={chipIcon} alt="chip" className="payment__card-image" />
                <img src={visaIcon} alt="visa" className="payment__card-image" />
              </div>

              <input
                type="text"
                className="payment__card-number"
                placeholder='4441 1144 6495 8204'
                value={numberQuery}
                disabled
              />

              <div className="payment__card-bottom-wrapper">
                <div className="payment__input-number-wrapper">
                  <label htmlFor="card-number" className="payment__card-label">
                    піб власника:
                  </label>

                  <input
                    type="text"
                    className="payment__card-text"
                    placeholder='Клим Василь Степанович'
                    value={nameQuery}
                    disabled
                  />
                </div>

                <div className="payment__date-wrapper">
                  <label htmlFor="card-number" className="payment__card-label">
                    дійсний
                  </label>

                  <div className="payment__date-input-wrapper">
                    <input
                      type="text"
                      className="payment__card-number payment__card-number--mounth"
                      placeholder='04'
                      value={selectedMonth}
                      disabled
                    />

                    <input
                      type="text"
                      className="payment__card-number payment__card-number--year"
                      placeholder='2023'
                      value={selectedYear}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="payment__input-number-wrapper">
              <label htmlFor="card-number" className="payment__label">
                номер картки
              </label>

              <InputMask
                mask="9999 9999 9999 9999"
                maskChar="_"
                value={numberQuery}
                onChange={(e) => setNumberQuery(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    type="text"
                    className="payment__input"
                    id="card-number"
                    {...inputProps}
                  />
                )}
              </InputMask>
            </div>

            <div className="payment__input-name-wrapper">
              <label htmlFor="full-name" className="payment__label">
                Піб власника
              </label>

              <input
                type="text"
                className="payment__input"
                id='full-name'
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
              />
            </div>

            <div className="payment__bottom-wrapper">
              <div className="payment__input-wrapper">
                <label htmlFor="card-mounth" className="payment__label">
                  Термін дії
                </label>

                <select
                  className="payment__select"
                  id="card-mounth"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="" disabled hidden>Місяць</option>
                  <option value="01">Січень</option>
                  <option value="02">Лютий</option>
                  <option value="03">Березень</option>
                  <option value="04">Квітень</option>
                  <option value="05">Травень</option>
                  <option value="06">Червень</option>
                  <option value="07">Липень</option>
                  <option value="08">Серпень</option>
                  <option value="09">Вересень</option>
                  <option value="10">Жовтень</option>
                  <option value="11">Листопад</option>
                  <option value="12">Грудень</option>
                </select>
              </div>

              <div className="payment__input-wrapper">
                <label htmlFor="card-year" className="payment__label">
                  Термін дії
                </label>

                <select
                  className="payment__select"
                  id='card-year'
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="" disabled hidden>Рік</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>

              <div className="payment__input-wrapper">
                <label htmlFor="card-cvv" className="payment__label">
                  CVV
                </label>

                <InputMask
                  mask="999"
                  maskChar=""
                  value={cvvQuery}
                  onChange={(e) => setCvvQuery(e.target.value)}
                >
                  {(inputProps) => (
                    <input
                      type="password"
                      className="payment__input payment__input--short"
                      id='card-cvv'
                    />)}
                </InputMask>
              </div>
            </div>

            <button className="payment__button">
              оформити замовлення
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
