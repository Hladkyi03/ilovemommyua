import Carousel from '../../components/Carousel/Carousel';
import './AboutUs.scss';
import banner1 from "../../media/about-us-carousel/sl1.png";
import banner2 from "../../media/about-us-carousel/sl2.png";
import banner3 from "../../media/about-us-carousel/sl3.png";
import banner4 from "../../media/about-us-carousel/sl4.png";
import banner5 from "../../media/about-us-carousel/sl5.png";
import banner6 from "../../media/about-us-carousel/sl6.png";
import { ChildClothes } from '../../components/ChildClothes/ChildClothes';
import { AboutUsFooter } from '../../components/AboutUsFooter/AboutUsFooter';
import { CertificatesFooter } from '../../components/CertificatesFooter/CertificatesFooter';
import aos from '../../utils/aos';

export const AboutUs = () => {
  return (
    <main className="main main--padding-bottom-160" data-aos="fade-down">
      <div className="about-us">
        <div className="container">
          <div className="about-us__title-wrapper">
            <h2 className="about-us__title">#ILOVEMOMMYUA</h2>
          </div>
        </div>
      </div>

      <Carousel
        images={[banner1, banner2, banner3, banner4, banner5, banner6]}
        step={1}
        frameSize={4}
        itemWidth={266}
        animationDuration={1000}
        gap={20}
        infinite={false}
        nav={false}
      />

      <ChildClothes />

      <AboutUsFooter />
      <CertificatesFooter />
    </main>
  )
}
