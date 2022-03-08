import ProductCard from "@components/common/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductsCollection = ({ products }: { products: IProduct[] }) => {
  const navigate = useNavigate();
  const onclick = (id: string | undefined): void => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onclick={onclick} />
      ))}
    </div>
  );
};

export default ProductsCollection;
