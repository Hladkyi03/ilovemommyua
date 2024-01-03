import './HomePageFooter.scss';
import logo from '../../media/img/logo white.png';
import instagramIcon from '../../media/icons/inst.png';
import facebookIcon from '../../media/icons/facebook.png';
import youtubeIcon from '../../media/icons/youtube.png';
import footerBg from '../../media/img/home-page-footer-bg.png';

export const HomePageFooter = () => (
  <footer className="homepage-footer homepage-footer--margin-top-131">
    <img src={footerBg} alt="background" className="home-page__footer-bg" />

    <div className="container container--padding-inline-71">
      <div className="homepage-footer__block">
        <div className="homepage-footer__wrapper">
          <div className="homepage-footer__contacts">
            <p className="homepage-footer__title">
              контакти
            </p>

            <div className="homepage-footer__phone-numbers">
              <p className="homepage-footer__caption">
                ІНТЕРНЕТ - МАГАЗИН:
              </p>

              <div className="homepage-footer__phones-wrapper">
                <a className="homepage-footer__info homepage-footer__info--link" href="tel:380963331033">
                  +38 (096) 333 10 33
                </a>
                <a className="homepage-footer__info homepage-footer__info--link" href="tel:380673731149">
                  +38 (067) 373 11 49
                </a>
              </div>
            </div>

            <div className="homepage-footer__schedule">
              <p className="homepage-footer__caption">
                ГРАФІК РОБОТИ
              </p>

              <div className="homepage-footer__schedule-wrapper">
                <p className="homepage-footer__info">
                  Понеділок - Субота <br />
                  Неділя
                </p>
                <p className="homepage-footer__info">
                  9:30 - 19:00 <br />
                  вихідний
                </p>
              </div>
            </div>

            <div className="homepage-footer__emails">
              <p className="homepage-footer__caption">
                E-MAIL
              </p>

              <div className="homepage-footer__emails-wrapper">
                <a className="homepage-footer__link" href="mailto:ilovemommylviv@gmail.com">
                  ilovemommylviv@gmail.com
                </a>
                <p>
                  <a className="homepage-footer__link" href="mailto:ilovemommylviv2@gmail.com">
                    ilovemommylviv2@gmail.com
                  </a>
                  <span className="homepage-footer__info">(з питань співпраці)</span>
                </p>
              </div>
            </div>
          </div>


          <div className="homepage-footer__socials">
            <p className="homepage-footer__title">
              соціальні мережі
            </p>

            <div className="homepage-footer__socials-wrapper">
              <a
                href="https://www.instagram.com/ilovemommyua/"
                className="homepage-footer__social"
                target='_blank'
              >
                <img src={instagramIcon} alt="instargam" />
              </a>

              <a
                href="https://www.facebook.com/ilovemommyua?fref=ts"
                className="homepage-footer__social"
                target='_blank'
              >
                <img src={facebookIcon} alt="facebook" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCNT_Cg6my1uO6Lb0y8mX6nA/videos"
                className="homepage-footer__social"
                target='_blank'
              >
                <img src={youtubeIcon} alt="youtube" />
              </a>
            </div>

            <img src={logo} alt="logo" className="homepage-footer__logo" />
          </div>
        </div>
      </div>
    </div>
  </footer>
)
