import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={product.image} className="card-img-top" height="200" />

      <div className="card-body">
        <h6 className="card-title">{product.title.slice(0, 40)}</h6>
        <p className="fw-bold text-success">₹{product.price}</p>

        <Link to={`/product/${product.id}`} className="btn btn-primary w-100">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;