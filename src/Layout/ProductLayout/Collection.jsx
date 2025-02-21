import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import productData from "./data";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Table from "./Table";
const Collection = () => {
  const [products, setProducts] = useState([]);
  const { request, loading } = useFetch();
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await request(
        "GET",
        // "https://api.escuelajs.co/api/v1/products"
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
      );
      if (response.data) {
        setProducts(response.data);
      } else {
        setError(response.error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  return (
    <>

    <Table CollectionItems={products} />
      <div className="row">
        <div className="col text-end ">
          <button onClick={()=>navigate("/add-item")} className="theme--button p-2 ">
            <AddIcon/>
             ADD ITEM </button>
        </div>
      </div>
      <div className="container-fluid d-flex mt-3">
        <div className="   width-15 ">filters</div>
        <div className=" container   w-100">
          <div className="row">
            <div className="flex-center justify-content-between">
              <h2>ALL Collection</h2>
              {/* <h2>ALL Collection</h2> */}
            </div>
          </div>
          <div className="row row-cols-3 g-4">
            {products.map((product, index) => (
              <Link to={`/collection-item/${product.id}`}>
                <div className="col  ">
                  <div className="p-3 box-shadow rounded-3 height-350">
                    <div className="product-img mb-3">
                      <img src={product.images} alt={product.title} />
                    </div>
                    <div className="text-dark">{product.title}</div>
                    <h6 className="fw-bolder text-dark">{`$${product.price}`}</h6>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
