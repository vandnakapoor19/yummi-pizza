import React from "react";

const OrderItem = ({
  img,
  title,
  price,
  amount
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div className="items">
        <h4><span>Name</span>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <h4 className="item-quantity">{amount}</h4>
      </div> 
    </div>
  );
};

export default (OrderItem);
