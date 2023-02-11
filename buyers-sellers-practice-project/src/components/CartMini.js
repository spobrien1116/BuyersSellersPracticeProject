import React from "react";
import { loggedInUserDatabase } from "../rest/LoggedInUserDatabase.js";
import { cartDatabase } from "../rest/CartDatabase.js";

export class CartMini extends React.Component {
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
        CART
        <div className="user-email">
          Welcome {this.state.email && <>{this.state.email}</>}
        </div>
        <div className="cart-item-count">
          <div className="cart-item">{this.state.cartItems.length}</div>
        </div>
        <br></br>
      </div>
    );
  }
}
