import "./CertificatesBlock.scss";
import { certificates } from "../../data/certificates";
import { CertificateCard } from "../CertificateCard/CertificateCard";

export const CertificatesBlock = () => {
  return (
    <div className="certificates-block certificates-block--margin-top-60">
      <div className="container">
        <div className="certificates-block__wrapper">
          {certificates.map(certificate => (
            <CertificateCard certificate={certificate} key={certificate.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
