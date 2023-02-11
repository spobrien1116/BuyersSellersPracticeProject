import React from "react";
import { Shop } from "../components/Shop";
import { CartMini } from "../components/CartMini";

function ShopHome() {
  return (
    <>
      <div className="shop-intro">
        <h1>WeTradeStuff.com</h1>
        <h4>
          Welcome shoppers. Check out the newest deals in our sales section.
          Happy shopping.
        </h4>
      </div>
      <CartMini />
      <Shop />
    </>
  );
}

export default ShopHome;
