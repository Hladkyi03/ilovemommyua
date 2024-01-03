import './ModalOverlay.scss';
import { useState } from "react"
import off from '../../media/icons/off.png'

export const ModalOverlay = ({ setModalOverlay }) => {
  const [emailQuery, setEmailQuery] = useState('');
  const [passwordQuery, setPasswordQuery] = useState('');

  const handleOnClick = () => {
    setModalOverlay(false);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setEmailQuery('');
    setPasswordQuery('');
    setModalOverlay(false);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-overlay__sign-in">
        <div className="modal-overlay__sign-in-wrapper">
          <button className="modal-overlay__sign-in-close-button" onClick={handleOnClick} >
            <img src={off} alt="close" className="modal-overlay__sign-in-close-icon" />
          </button>

          <p className="modal-overlay__sign-in-title">
            Увійти
          </p>

          <form
            action="#"
            className="modal-overlay__sign-in-form"
            onSubmit={(e) => handleOnSubmit(e)}
          >
            <label
              htmlFor="sign-in-email"
              className="modal-overlay__sign-in-label
                modal-overlay__sign-in-label--margin-top-35"
            >
              пошта
            </label>
            <input
              type="text"
              className="modal-overlay__sign-in-input"
              id='sign-in-email'
              required
              value={emailQuery}
              onChange={(e) => setEmailQuery(e.target.value)}
            />

            <label htmlFor="sign-in-password" className="modal-overlay__sign-in-label">
              пароль
            </label>
            <input
              type="password"
              className="modal-overlay__sign-in-input"
              id='sign-in-password'
              required
              value={passwordQuery}
              onChange={(e) => setPasswordQuery(e.target.value)}
            />

            <button className="modal-overlay__sign-in-button">
              вхід
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
