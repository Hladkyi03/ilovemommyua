import { CertificatesBlock } from '../components/CertificatesBlock/CertificatesBlock';
import { CertificatesFooter } from '../components/CertificatesFooter/CertificatesFooter';
import '../main.scss';
import './Certificates.scss';

export const Certificates = () => {
  return (
    <main className="main main--padding-top-200 main--padding-bottom-210">
      <div className="container">
        <div className="certificates">
          <div className="certificates__title-wrapper">
            <h2 className="certificates__title">ПОДАРУНКОВІ СЕРТИФІКАТИ</h2>
          </div>

          <p className="certificates__subtitle">
            Зроби справжній подарунок для себе та сім’ї
          </p>
        </div>
      </div>

      <CertificatesBlock />

      <CertificatesFooter />
    </main>
  )
}
