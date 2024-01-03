import { Catalog } from '../../components/Catalog/Catalog';
import { CatalogFooter } from '../../components/CatalogFooter/CatalogFooter';
import { CertificatesFooter } from '../../components/CertificatesFooter/CertificatesFooter';
import { Promo } from '../../components/Promo/Promo';
import { clothesCategories } from '../../data/clothesCategories';
import { boysClothes } from '../../data/boysClothes';
import '../../main.scss';
import './BoysPage.scss';

export const BoysPage = () => {
  return (
    <main className="main main--padding-top-82 main--padding-bottom-160">
      <Promo
        modificator='promo__background--boys'
        leftText={'new kids'}
        rightText={'new style'}
      />

      <Catalog products={boysClothes} categories={clothesCategories}/>

      <CatalogFooter />

      <CertificatesFooter />
    </main>
  )
}
