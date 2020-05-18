import React from "react";
import { useHistory } from 'react-router-dom';
import OrderItem from "./OrderItem";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../../actions";

const OrderConfirmation = ({ cart = [], total, dispatch }) => {
const history = useHistory();
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
            <div className="order-header">
                <h2>your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </div>
          
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
      
      </header>
      {/* cart items */}
      <article>
          <div className="Summery"> 
                <div className="order-header">
                    <h3>Thanks for your order</h3>
                    <p>You'll receive an email shortly, Once order confirms by  the store, Call us 1-999-9999-999.</p>
                </div>
              <div className="order-details">
                  <p><span>Order # </span> <span>5656253625</span></p>
                  <p><span>Order Date </span><span>May 7, 2020</span></p>
                  <p><span>Order Total </span><span>${total+4}</span></p>
              </div>
              
          </div>
        {cart.map(item => {
          return (item.amount!==0?<OrderItem key={item.id} {...item} />:'');
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
          onClick={() => (dispatch({ type: CLEAR_CART }) )}>
          Start Again
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
export default connect(mapStateToProps)(OrderConfirmation);
