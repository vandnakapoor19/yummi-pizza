import React from "react";
import { connect } from "react-redux";

import {
  ADD_TO_CART,
} from "../../actions";
const CartItem = ({
  img,
  title,
  price,
  addToCart
}) => {
  return (
    <div className="product-item">
        <img src={img} alt={title} />
      <div className="product-description">
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* Add To Cart button */}
        <button className="add-btn" onClick={() => addToCart()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => dispatch({ type: ADD_TO_CART, payload: {...ownProps,amount: ownProps.amount + 1} })
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
