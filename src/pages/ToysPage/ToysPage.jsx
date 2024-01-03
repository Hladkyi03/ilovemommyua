import { Catalog } from '../../components/Catalog/Catalog';
import { CatalogFooter } from '../../components/CatalogFooter/CatalogFooter';
import { CertificatesFooter } from '../../components/CertificatesFooter/CertificatesFooter';
import { Promo } from '../../components/Promo/Promo';
import { toys } from '../../data/toys';
import { toysCategories } from '../../data/toysCategories';
import '../../main.scss';
import './ToysPage.scss';

export const ToysPage = () => {
  return (
    <main className="main main--padding-top-82 main--padding-bottom-160">
      <Promo
        modificator='promo__background--toys'
        leftText={'new kids'}
        rightText={'new toys'}
      />

      <Catalog products={toys} categories={toysCategories}/>

      <CatalogFooter />

      <CertificatesFooter />
    </main>
  )
}
