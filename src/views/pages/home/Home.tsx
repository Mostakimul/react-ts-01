import MkSlider from "@components/custom/MkSlider";
import ProductsCollection from "@components/home/ProductsCollection";

const Home = () => {
  return (
    <>
      <div className="py-2">
        <MkSlider />
      </div>
      <div className="my-3">
        <ProductsCollection />
      </div>
    </>
  );
};

export default Home;
