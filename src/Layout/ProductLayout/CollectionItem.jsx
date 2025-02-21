import React, { useState ,useEffect} from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Table from "./Table";
const CollectionItem = () => {

    const [product,setProduct]=useState({})
    const {request,loading}= useFetch()
    const [error,setError]=useState(null)
    const params=useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await request(
        "GET",
        `https://api.escuelajs.co/api/v1/products/${params.id}`
      );
      if (response.data) {
        setProduct(response.data);
      } else {
        setError(response.error);
      }
    };

    fetchProducts();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
//   const product ={
//     id: 3,
//     title: "Classic Heather Gray Hoodie",
//     slug: "classic-heather-gray-hoodie",
//     price: 77,
//     description:
//       "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
//     category: {
//       id: 1,
//       name: "NuevaCcategoria",
//       slug: "nuevaccategoria",
//       image: "https://i.imgur.com/QkIa5tT.jpeg",
//       creationAt: "2025-02-20T14:40:12.000Z",
//       updatedAt: "2025-02-20T20:47:01.000Z",
//     },
//     images: ["https://i.imgur.com/cHddUCu.jpeg"],
//     creationAt: "2025-02-20T14:40:12.000Z",
//     updatedAt: "2025-02-20T16:22:23.000Z",
//   };
  return (
    <>
      {/* <div className="container ">
        <div className="row row-cols-2">
          <div className="col">
            <div className="flex-center product-item-img mb-3">
              <img src={product.images} alt={product.title} />
            </div>
          </div>
          <div className="col">
            <div className="p-2">
              <h4 className="text-dark mb-3">{product.title}</h4>
              <h6 className="fw-bolder text-dark fs-3 mb-5">{`$${product.price}`}</h6>
              <p className="fw-normal mb-5">{product.description}</p>
              <p className="text-dark fw-bolder">Select Size</p>
              <div className="flex-center justify-content-start gap-2 mb-4">
                <button className="p-2  px-2 border-0  size-button rounded-1">
                  M
                </button>
                <button className="p-2 px-2 border-0 px-3 rounded-1">L</button>
                <button className="p-2 border-0 rounded-1 size-button">
                  XL
                </button>
              </div>
              <div>
                <button className="bg-dark text-light px-4 py-2">
                  ADD TO CARD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Table  /> */}
    </>
  );
};

export default CollectionItem;
