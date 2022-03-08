const ProductCard = ({
  product,
  onclick,
}: {
  product: IProduct;
  onclick: (id: string | undefined) => void;
}) => {
  return (
    <div onClick={() => onclick(product._id)}>
      <div>
        <img
          src={import.meta.env.VITE_IMAGE_BASE_URL + product.image}
          alt={product.name}
        />
      </div>
      <div>
        <h4>{product.name}</h4>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
