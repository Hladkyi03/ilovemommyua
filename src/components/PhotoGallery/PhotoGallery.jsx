import { useState } from 'react';
import './PhotoGallery.scss';

export const PhotoGallery = ({ product }) => {
  const { imagesSrc } = product;

  const [mainImage, setMainImage] = useState(0);
  const [bottomImages, setBottomImages] = useState(imagesSrc.filter((_, index) => index !== mainImage));

  console.log(bottomImages);

  const handleNextClick = () => {
    let bottomImagesCopy = [...bottomImages];
    bottomImagesCopy.splice(mainImage, 1);

    bottomImagesCopy.push(imagesSrc[mainImage]);

    setBottomImages(bottomImagesCopy);
    setMainImage(prev => prev + 1);
  }

  const handleImageClick = (i) => {
    let bottomImagesCopy = [...bottomImages];

    const imageIndex = bottomImagesCopy.indexOf(imagesSrc[i])

    bottomImagesCopy[imageIndex] = imagesSrc[mainImage];

    setBottomImages(bottomImagesCopy);
    setMainImage(i);
  }

  let i = -6;

  return (
    <div className="photo-gallery">
      <div className="photo-gallery__main-photo">
        <button
          aria-label="Previous"
          data-cy="prev"
          type="button"
          className="photo-gallery__button photo-gallery__button--prev"
          onClick={() => setMainImage(prev => --prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="49" viewBox="0 0 45 49" fill="none">
            <g filter="url(#filter0_d_34_188)">
              <circle cx="22.5" cy="22.5" r="18.5" fill="white" />
            </g>
            <circle cx="22" cy="22" r="21.5" stroke="white" />
            <path d="M30 13L16.451 21.5811C15.8034 21.9912 15.8391 22.9475 16.5154 23.3082L30 30.5" stroke="#E95F48" strokeWidth="3" />
            <defs>
              <filter id="filter0_d_34_188" x="0" y="4" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_188" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_188" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>

        <img src={imagesSrc[mainImage]} alt="product" className='photo-gallery__main-img' />

        <button
          aria-label="Next"
          data-cy="next"
          type="button"
          className="photo-gallery__button photo-gallery__button--next"
          onClick={() => handleNextClick()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="48" viewBox="0 0 45 48" fill="none">
            <g filter="url(#filter0_d_34_189)">
              <circle cx="22.5" cy="21.5" r="18.5" transform="rotate(-180 22.5 21.5)" fill="white" />
            </g>
            <circle cx="23" cy="22" r="21.5" transform="rotate(-180 23 22)" stroke="white" />
            <path d="M15 31L28.549 22.4189C29.1966 22.0088 29.1609 21.0525 28.4846 20.6918L15 13.5" stroke="#E95F48" strokeWidth="3" />
            <defs>
              <filter id="filter0_d_34_189" x="0" y="3" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_189" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_189" result="shape" />
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      <div className="photo-gallery__bottom-photos">
        {bottomImages.map(photoSrc => {
          return (
            <img
              src={photoSrc}
              alt="product"
              className="photo-gallery__bottom-photo"
              key={i++}
              onClick={() => handleImageClick(imagesSrc.findIndex(src => src === photoSrc))}
            />
          )
        })}
      </div>
    </div>
  )
}
