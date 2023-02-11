import React from "react";
import { loggedInUserDatabase } from "../rest/LoggedInUserDatabase.js";
import { cartDatabase } from "../rest/CartDatabase.js";

export class CartMax extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      cartItems: [],
    };
  }

  componentDidMount() {
    console.log("The cart component did mount!");
    this.fetchCartInfo();
  }

  fetchCartInfo = async () => {
    console.log("An asynchronous call has been made to get the user's email.");
    const email = await loggedInUserDatabase.get();
    console.log("An asynchronous call has been made to get all cart items.");
    const cart = await cartDatabase.get();
    this.setState({ email: email, cartItems: cart });
  };

  render() {
    return (
      <div className="cart">
        <div className="cart-intro">
          <h1>WeTradeStuff.com</h1>
          <div>
            Hello {this.state.email && <>{this.state.email}</>}. Here is the
            list of current items in your cart. If you are ready to proceed to
            checkout, please scroll to the bottom of the screen.
          </div>
        </div>
        <div className="cart-items">
          {this.state.cartItems.map((item, index) => (
            <div key={index}>
              <div>{item.name}</div>
              <div>Unit Price: ${item.price}</div>
              <div>Quantity Available: {item.quantityAvailable}</div>
              <div>Quantity In Cart: {item.quantityInCart}</div>
              <br></br>
            </div>
          ))}
        </div>
        <div className="cart-item-count">
          There are {this.state.cartItems.length} total items in your cart.
        </div>
      </div>
    );
  }
}
