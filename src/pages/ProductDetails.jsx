import { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { GlobalCartContext } from "../context/GlobalCartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(GlobalCartContext);
   const { dispatch } = useContext(GlobalCartContext);
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await getProductById(id);
      setProduct(res);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) return <h2>Loading...</h2>;

  return (
  <div className="container mt-4">
  <div className="row">
    <div className="col-md-5">
      <img src={product.image} className="img-fluid" />
    </div>

    <div className="col-md-7">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4 className="text-success">₹{product.price}</h4>

      <button
        className="btn btn-warning mt-3"
        onClick={() =>
          dispatch({ type: "ADD_TO_CART", payload: product })
        }
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>
  );
}

export default ProductDetails;