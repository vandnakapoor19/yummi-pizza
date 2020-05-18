import React  from "react";
import ProductItem from "./ProductItem";
import HomeCart from "../cart/HomeCart"
import { connect } from "react-redux";
import {  GET_TOTALS } from "../../actions";

const Products = ({ products,cart=[] ,total, dispatch }) => {

  // React.useEffect(() => {

  //   fetch("http://127.0.0.1:8000/api/products")
  //   .then(res=> res.json())
  //   .then(res => dispatch({type:'GET_ITEMS',payload:res}))
  //   .catch(err => console.log(err));

  // }, []);

  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);

  return (
    <section className="cart">
      {/* cart header */}
      <header>
      </header>
      {/* cart items */}
      <article>
        <div className="home-cart">
            <div className="item-display">
                {products.map(item => {
            return <ProductItem key={item.id} {...item} />;
          })}
            </div>
            <div className="cart-display">
              <HomeCart/>
            </div>
        </div>
          
      </article>
    </section>
  );
};

function mapStateToProps(store) {
  const { products, cart, total } = store;
  return { products,cart, total };
}
export default connect(mapStateToProps)(Products);
