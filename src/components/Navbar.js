import React from "react";
import { Switch,BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CartContainer from "./cart/CartContainer";
import Products from "./product/Products";
import OrderConfirmation from "./cart/OrderConfirmation";
const Navbar = ({ amount }) => {
  return (
    <Router history={Route}>
       <nav> 
          <Link to="/" className="total-amount">Products</Link>
      <ul className="nav-list">
          
          <li><Link to="/Cart">   
                    <div className="nav-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                    </svg>
                    <div className="amount-container">
                      <p className="total-amount">{amount}</p>
                    </div>
                  </div>
          </Link>
          </li>  
      </ul>
    </nav>
        <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/Cart" component={CartContainer} />
            <Route exact path="/OrderConfirmation" component={OrderConfirmation} />
        </Switch>
    </Router>
  );
};
const mapStateToProps = state => {
  return { amount: state.amount };
};
export default connect(mapStateToProps)(Navbar);
