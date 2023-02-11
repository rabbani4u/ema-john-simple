import React from "react";
import { Link } from "react-router-dom";

function Cart(props) {
  const cart = props.cart;
  const total = cart.reduce((total, product) => total + product.price, 0);

  let shipping = 0;
  if (total > 500) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 12.99;
  } else if (total > 0) {
    shipping = 4.99;
  }

  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  // console.log(typeof (grandTotal, tax));

  return (
    <div>
      <h4>Order Summary:</h4>
      <h5>Items Order: {cart.length}</h5>
      <p>Shipping Cost: ${shipping}</p>
      <p>VAT + TAX: ${tax}</p>
      <p>
        <strong>Total Price: $ {grandTotal}</strong>
      </p>
      <Link to="/review">
        <button className="main-button">Review Order</button>
      </Link>
    </div>
  );
}

export default Cart;
