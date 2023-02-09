import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData/products.json";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

function Review() {
  const [cart, setCart] = useState([]);

  const handleRemoveProduct = productKey => {
    console.log("Clicked removed", productKey);
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    //Cart Information
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProduct = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  return (
    <div className="twin-container">
      <div className="products-container">
        {cart.map(pd => (
          <ReviewItem
            handleRemoveProduct={handleRemoveProduct}
            key={pd.key}
            product={pd}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default Review;
