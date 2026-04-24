import { useContext } from "react";
import { GlobalCartContext } from "../context/GlobalCartContext";

export const Cart = ()=> {
  const { cart, dispatch } = useContext(GlobalCartContext);

  return (
   <div className="container mt-4">
  <h2>Shopping Cart</h2>

  {cart.length === 0 ? (
    <h4>No items in cart</h4>
  ) : (
    cart.map(item => (
      <div className="card mb-3" key={item.id}>
        <div className="row g-0">
          <div className="col-md-2">
            <img src={item.image} className="img-fluid" />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5>{item.title}</h5>
              <p className="text-success">₹{item.price}</p>
            </div>
          </div>

          <div className="col-md-2 d-flex align-items-center">
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    ))
  )}
</div>
  );
}

export default Cart;