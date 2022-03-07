import ProductCard from "@components/common/ProductCard";

const ProductsCollection = () => {
  return (
    <div className="grid grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default ProductsCollection;
