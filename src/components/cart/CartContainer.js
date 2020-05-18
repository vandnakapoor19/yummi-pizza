import React from "react";
import { useHistory } from 'react-router-dom';
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
  const history = useHistory();

  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
        <button
          onClick={()=>history.push('/')}
          className="btn clear-btn btn-process">
         Continue Shopping
        </button>
      </section>
      
    );
  }
  return (
    <section className="cart">
        <div id="cart">
      {/* cart header */}
      <header>
        <button
          onClick={()=>history.push('/')}
          className="btn clear-btn btn-process">
         Back to Menu
        </button>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return (item.amount!==0?<CartItem key={item.id} {...item} />:'');
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Delivery Cost <span>$4.00</span>
          </h4>
        </div>
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <div className="cart-total">
          <h4>
            total <span>${total+4}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}>
          clear cart
        </button>
        <button
          onClick={()=>history.push('/OrderConfirmation')}
          className="btn clear-btn btn-process">
         Confirm Order
        </button>
        <button
          onClick={()=>history.push('/')}
          className="btn clear-btn btn-process">
         Continue Shopping
        </button>
      </footer>
        </div>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(CartContainer);
