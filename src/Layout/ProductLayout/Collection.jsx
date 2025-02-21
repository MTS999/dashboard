import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import productData from "./data";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Table from "./Table";
import FilterData from "./FilterData";

const Collection = () => {
  const uniqueCategories = [
    ...new Set(
      productData
        .filter((item) => item.category) // Ensure item has a category
        .map((item) => item.category.name) // Extract category name
    ),
  ];

  console.log(uniqueCategories);

  const [products, setProducts] = useState([]);
  const [filerproduct, setFilterProduct] = useState([]);
  const { request, loading } = useFetch();
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const response = await request(
      "GET",
      // "https://api.escuelajs.co/api/v1/products"
      `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=10`
    );
    if (response.data) {
      console.log(response);

      setProducts(response.data);
      setFilterProduct(response.data);
    } else {
      setError(response.error);
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  return (
    <>
      <div className="row">
        <div className="col text-end ">
          <button
            onClick={() => navigate("/add-item")}
            className="theme--button p-2 "
          >
            <AddIcon />
            ADD ITEM{" "}
          </button>
        </div>
      </div>
      <div className="container-fluid d-flex mt-3">
        <div className="   width-15 ">
          <FilterData
            CollectionData={products}
            setFilterProduct={setFilterProduct}
          />
        </div>
        <div className=" container   w-100">
          <div className="row">
            <div className="flex-center justify-content-between">
              <h2>ALL Collection ({filerproduct.length})</h2>
              {/* <h2>ALL Collection</h2> */}
            </div>
          </div>
          {/* <div className="row row-cols-3 g-4">
            {filerproduct.length > 0 &&
              filerproduct.map((product, index) => (
                <Link to={`/collection-item/${product.id}`}>
                  <div className="col  ">
                    <div className="p-3 box-shadow rounded-3 height-350">
                      <div className="product-img mb-3">
                        <img src={product.images} alt={product.title} />
                      </div>
                      <div className="text-dark mt-2">{product.title}</div>
                      <h6 className="fw-bolder text-dark mt-2">{`$${product.price}`}</h6>
                    </div>
                  </div>
                </Link>
              ))}
          </div> */}
        </div>
      </div>
      <Table filerproduct={filerproduct} page={page} setPage={setPage} />
    </>
  );
};

export default Collection;
