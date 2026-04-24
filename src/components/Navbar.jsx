import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalCartContext } from '../context/GlobalCartContext';
import { AuthContext } from '../context/AuthContext';
const Navbar = () => {

  const { cart } = useContext(GlobalCartContext);
  const { user,logout } = useContext(AuthContext);

   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">ShopEasy</Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">Home</Link>

          {!user && (
            <>
              <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
              <Link className="btn btn-outline-light me-2" to="/register">Register</Link>
            </>
          )}
          {user && (
            <button className="btn btn-outline-light me-2" onClick={logout}>
              Logout
            </button>
          )}
          <Link className="btn btn-warning" to="/cart">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;