import useApi from "hooks/useApi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { add_to_cart } from "redux/actions/cartAction";
import ProductService from "services/Product.service";

const SingleProduct = () => {
  const { id = "" } = useParams();

  const { data: product } = useApi<IProduct>(() =>
    ProductService.getProductDetailsById(id)
  );

  const dispatch = useDispatch();
  return (
    <div>
      {product && (
        <img src={import.meta.env.VITE_IMAGE_BASE_URL + product.image} alt="" />
      )}
      <button onClick={() => dispatch(add_to_cart(product as IProduct))}>
        Add to cart
      </button>
      <button>Remove from cart</button>
    </div>
  );
};

export default SingleProduct;
