import { useParams } from "react-router-dom"
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { productsDetails } from "../../data/productsDetails";

export const ProductDetailsPage = () => {
  const { productId } = useParams();

  const currentProduct = productsDetails.find(product => (
    product.id === +productId
  ));

  return (
    <main className="main main--product-details-background">
      <div className="container">
        <ProductDetails product={currentProduct} />
      </div>
    </main>
  )
}
