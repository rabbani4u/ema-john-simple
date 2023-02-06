import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import Product from "../Product/Product";
import "./Shop.css";

function Shop() {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map(product => (
          <Product product={product}></Product>
        ))}
      </div>
      <div className="cart-conatainer">
        <h1>This is Cart</h1>
      </div>
    </div>
  );
}

export default Shop;
