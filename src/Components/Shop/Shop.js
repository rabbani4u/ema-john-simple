import React, { useState } from "react";
import fakeData from "../../fakeData/products.json";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

function Shop() {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = product => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter(pd => pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map(product => (
          <Product
            key={product.key}
            showAddToCart={true}
            product={product}
            handleAddProduct={handleAddProduct}
          />
        ))}
      </div>
      <div className="cart-conatainer">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default Shop;
