import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import useFetch from "../../hooks/useFetch";
import ReactEditor from "react-text-editor-kit";

const AddProduct = () => {
  const { request, loading } = useFetch();
  const [error, setError] = useState(null);

  const [productData, setProductData] = useState({
    title: "mts999",
    price: "12",
    description: "wher are you going",
    categoryId: "1",
    images: ["https://placeimg.com/640/480/any2"], // Array with one empty string
  });


  const addProducts = async () => {
    const response = await request(
      "POST",
      "https://api.escuelajs.co/api/v1/products/",
      productData
    );
    if (response.data) {
    //   setProducts(response.data);
    console.log(response.data);
    if(response.ok){
        console.log("dfdfd");
        
    }
    
    } else {
      setError(response.error);
    }
  };


  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProductData({
      ...productData,
      images: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", productData);
    addProducts()
    
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div>
          <h2>Add New Product</h2>
        </div>
      </div>
      <div className="container-fluid mt-4 box-shadow p-4 rounded-2 ">
        <form onSubmit={handleSubmit}>
          <div className="row row-cols-2 g-4 ">
            {/* Title */}
            <div className="col">
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={productData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Price */}
            <div className="col">
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={productData.price}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}

            {/* Category ID */}
            <div className="col">
              <TextField
                fullWidth
                label="Category ID"
                name="categoryId"
                type="number"
                value={productData.categoryId}
                onChange={handleChange}
                required
              />
            </div>

            {/* Image URL */}
            <div className="col">
              <TextField
                fullWidth
                label="Image URL"
                name="images"
                value={productData.images[0]}
                onChange={handleImageChange}
                required
              />
            </div>
            <div className="col">
            
                    <ReactEditor />

            </div>
          </div>

          <div className="row text-center">
            <div className="col text-end ">
              <button
                type="submit"
                className="theme--button px-3 py-2 rounded-2"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
