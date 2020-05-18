import React from "react";
import { useHistory } from 'react-router-dom';
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { GET_TOTALS } from "../../actions";

const HomeCart = ({ cart = [], total, dispatch }) => {
  const history = useHistory();

  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h4 className="empty-cart">your bag is currently empty,<br/>Add items to get started</h4>
        </header>
      </section>
      
    );
  }
  return (
    <section className="cart">
        <div id="cart">
      {/* cart header */}
      <header>
        <h4>your bag</h4>
        <div className="cart-total checkout" onClick={()=>history.push('/Cart')}>
          <h4>
            Checkout <span>${total+4}</span>
          </h4>
        </div>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return (item.amount!==0?<CartItem key={item.id} {...item} />:'');
        })}
      </article>
        </div>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(HomeCart);
