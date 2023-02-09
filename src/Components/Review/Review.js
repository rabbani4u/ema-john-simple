import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData/products.json";
import ReviewItem from "../ReviewItem/ReviewItem";

function Review() {
  const [cart, setCart] = useState([]);

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
    <div>
      {cart.map(pd => (
        <ReviewItem key={pd.key} product={pd} />
      ))}
    </div>
  );
}

export default Review;
