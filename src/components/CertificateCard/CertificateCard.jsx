import './CertificateCard.scss';

export const CertificateCard = ({ certificate }) => {
  const { imgSrc, certificateValue, price } = certificate

  return (
    <div className="certificate-card">
      <div className="certificate-card__image-wrapper">
        <img src={imgSrc} alt="certificate" className="certificate-card__image" />
      </div>

      <p className="certificate-card__title">
        {`Сертифікат на ${certificateValue} грн`}
      </p>

      <p className="certificate-card__price">
        {price}₴
      </p>

      <button className="certificate-card__button">додати в кошик</button>
    </div>
  )
}
