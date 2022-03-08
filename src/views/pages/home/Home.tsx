import MkSlider from "@components/custom/MkSlider";
import ProductsCollection from "@components/home/ProductsCollection";
import useApi from "hooks/useApi";
import ProductService from "services/Product.service";

const Home = () => {
  const { data: products } = useApi<IProduct[]>(ProductService.getAllProducts);

  return (
    <>
      <div className="py-2">
        <MkSlider />
      </div>
      <div className="my-3">
        {products && <ProductsCollection products={products} />}
      </div>
    </>
  );
};

export default Home;
