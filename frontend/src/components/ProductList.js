import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>List of Product</h1>
      <ul>
        {products.map((product, index) => (
          <div key={index}>
            <h5
              style={{
                textAlign: "left",
                color: "darkred",
              }}
            >
              {product.name} - ${product.price}
            </h5>
            <hr />
          </div>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
