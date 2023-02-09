import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Product(props) {
  // console.log(props);
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <p>
          by <small>{seller}</small>
        </p>
        <p>
          <strong>${price}</strong>
        </p>
        <p>only {stock} left in scock-order soon</p>
        {props.showAddToCart && (
          <button
            onClick={() => props.handleAddProduct(props.product)}
            className="main-button"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
