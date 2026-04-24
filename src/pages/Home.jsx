import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.log(error); // debug
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
  <div className="container mt-4">
  <h2 className="mb-4">Products</h2>

  <div className="row">
    {products.map(item => (
      <div className="col-md-3" key={item.id}>
        <ProductCard product={item} />
      </div>
    ))}
  </div>
</div>
  );
};
export default Home;