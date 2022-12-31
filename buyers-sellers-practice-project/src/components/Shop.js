import React from "react";

export class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      shopItems: [],
    };
  }

  render() {
    return (
      <div className="shop-items">
        <div className="shop-item">Something here for sale.</div>
      </div>
    );
  }
}
