import { useState } from "react";
import axios from "axios";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products/4");
      setProducts(response.data);
    } catch (err) {
      setError("Error fetching products.");
    }
    setLoading(false);
  };

  console.log(products);
  

  return (
    <div>
      <button onClick={fetchProducts} disabled={loading}>
        {loading ? "Loading..." : "Fetch Products"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
   
          <p >{products.title}</p>
      
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Collection;
