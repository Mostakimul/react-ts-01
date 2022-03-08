import ProductCard from "@components/common/ProductCard";

const ProductsCollection = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsCollection;
