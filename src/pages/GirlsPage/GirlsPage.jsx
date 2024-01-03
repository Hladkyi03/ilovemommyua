import { Catalog } from '../../components/Catalog/Catalog';
import { CatalogFooter } from '../../components/CatalogFooter/CatalogFooter';
import { CertificatesFooter } from '../../components/CertificatesFooter/CertificatesFooter';
import { Promo } from '../../components/Promo/Promo';
import { clothesCategories } from '../../data/clothesCategories';
import { girlsClothes } from '../../data/girlsChothes';
import '../../main.scss';
import './GirlsPage.scss';

export const GirlsPage = () => {
  return (
    <main className="main main--padding-top-82 main--padding-bottom-160">
      <Promo
        modificator='promo__background--girls'
        leftText={'new kids'}
        rightText={'new style'}
      />

      <Catalog products={girlsClothes} categories={clothesCategories}/>

      <CatalogFooter />

      <CertificatesFooter />
    </main>
  )
}
