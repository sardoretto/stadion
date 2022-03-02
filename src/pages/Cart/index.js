import { useContext } from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/productCard";
import { ProductContext } from "../../utils/productContext";

function CartPage() {
  const { cartStadions } = useContext(ProductContext);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10">
        {cartStadions &&
          cartStadions.map((stadion) => {
            return <ProductCard stadion={stadion} key={stadion.id} />;
          })}
      </div>
    </Layout>
  );
}

export default CartPage;
