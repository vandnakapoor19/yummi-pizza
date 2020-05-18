import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
  ADD_TO_CART
} from "./actions";
import cartItems from './cart-items';
const initialStore = {
  products:cartItems,
  cart:[],
  total: 0,
  amount: 0
};

function reducer(state = initialStore, action) {

  if(action.type === 'GET_ITEMS'){
      return { ...state, products: action.payload };
  }
  /* CLEAR CART */
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  /* ADD TO CART */
  if(action.type===ADD_TO_CART){
    const foundItem = state.cart.find(item => item.id === action.payload.id);
    let newCart = [];
      if (foundItem) {
        newCart = state.cart.map(item => 
          item.id !== action.payload.id ? item : { ...item, amount: item.amount +1 }
        );
      } else {
        newCart = [...state.cart, action.payload];
      }
      return { ...state, cart: newCart }

    }

  /* DELETE TO CART */
  if (action.type === DECREASE) {
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  /* INCREASE The CART */
  if (action.type === INCREASE) {
    let tempCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  /* REMOVE The CART */
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
    };
  }

  /*TOTAL items in The CART */
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  /*TOGGLE  items in The CART */
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      })
    };
  }
  return state;
}

export default reducer;

