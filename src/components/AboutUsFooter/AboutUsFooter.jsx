import './AboutUsFooter.scss';
import instagramIcon from '../../media/icons/inst.png';
import facebookIcon from '../../media/icons/facebook.png';
import youtubeIcon from '../../media/icons/youtube.png';
import aos from '../../utils/aos';

export const AboutUsFooter = () => (
  <div className="about-us-footer" data-aos="fade-up">
    <div className="container">
      <h3 className="about-us-footer__title">
        соціальні мережі
      </h3>

      <div className="about-us-footer__socials-wrapper">
        <a
          href="https://www.instagram.com/ilovemommyua/"
          className="about-us-footer__social"
          target='_blank'
        >
          <img src={instagramIcon} alt="instargam" />
        </a>

        <a
          href="https://www.facebook.com/ilovemommyua?fref=ts"
          className="about-us-footer__social"
          target='_blank'
        >
          <img src={facebookIcon} alt="facebook" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCNT_Cg6my1uO6Lb0y8mX6nA/videos"
          className="about-us-footer__social"
          target='_blank'
        >
          <img src={youtubeIcon} alt="youtube" />
        </a>
      </div>
    </div>
  </div>
)
