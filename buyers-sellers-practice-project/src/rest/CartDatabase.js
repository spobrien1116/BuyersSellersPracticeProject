const cartContents = [];

class CartDatabase {
  get = async () => {
    const cartData = cartContents;
    console.log(
      `The array contents of items in the current user's cart:`,
      cartData
    );
    return cartData;
  };
}

export const cartDatabase = new CartDatabase();
