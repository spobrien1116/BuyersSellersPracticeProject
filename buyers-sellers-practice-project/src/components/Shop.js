import React from "react";
import { shopDatabase } from "../rest/ShopDatabase.js";
import { salesDatabase } from "../rest/SalesDatabase.js";

export class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      saleItems: [],
      shopItems: [],
    };
  }

  componentDidMount() {
    console.log("The shop component did mount!");
    this.fetchItems();
  }

  fetchItems = async () => {
    console.log("An asynchronous call has been made to get all shop items.");
    const sales = await salesDatabase.get();
    const items = await shopDatabase.get();
    this.setState({ shopItems: items, saleItems: sales });
  };

  render() {
    return (
      <div className="shop">
        {/*All prices are being shown just for visuals/the sake of the project making sense. I am aware that
        prices would be calculated through a back-end database for security purposes with a real-life app of
        this nature. */}
        <div className="sale-items">
          <div className="container text-center">
            <div className="row row-cols-4">
              {this.state.saleItems.map((item, index) => (
                <div className="sale-item col" key={index}>
                  <div>{item.name}</div>
                  <div>Quantity Available: {item.quantity}</div>
                  <div>Unit Price: ${item.price}</div>
                  <div>
                    Final Price: $
                    {(item.price * (1 - item.discount)).toFixed(2)}
                  </div>
                  <div>You save {item.discount * 100}%!</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="shop-items">
          <div className="container text-center">
            <div className="row row-cols-4">
              {this.state.shopItems.map((item, index) => (
                <div className="shop-item col" key={index}>
                  <div>{item.name}</div>
                  <div>Quantity Available: {item.quantity}</div>
                  <div>Unit Price: ${item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
