const saleItemsDatabase = [
  {
    name: "Autumn Leaves Teapot 64oz",
    quantity: 4,
    price: 120.99,
    discount: 0.25,
  },
  {
    name: "Autumn Leaves Mug 8oz",
    quantity: 16,
    price: 18.5,
    discount: 0.33,
  },
  {
    name: "Koi Pond Coaster",
    quantity: 16,
    price: 4.99,
    discount: 0.5,
  },
];

class SalesDatabase {
  get = async () => {
    const saleItemsData = saleItemsDatabase;
    console.log(
      `The full array of sale items available in the shop, their quantities, and their discount amount:`,
      saleItemsData
    );
    return saleItemsData;
  };
}

export const salesDatabase = new SalesDatabase();
