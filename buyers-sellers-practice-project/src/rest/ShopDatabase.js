const itemDatabase = [
  {
    name: "Jasmine Tea 5oz Loose Leaf",
    quantity: 57,
    price: 6.99,
  },
  {
    name: "Oolong Tea 5oz Loose Leaf",
    quantity: 43,
    price: 4.99,
  },
  {
    name: "Mango Green Tea 5oz Loose Leaf",
    quantity: 18,
    price: 5.25,
  },
  {
    name: "Elderberry Black Tea 5oz Loose Leaf",
    quantity: 11,
    price: 5.25,
  },
  {
    name: "Raspberry White Tea 5oz Loose Leaf",
    quantity: 36,
    price: 11.5,
  },
  {
    name: "Chai Black Tea 5oz Loose Leaf",
    quantity: 84,
    price: 5.99,
  },
  {
    name: "Blueberry Lemon Green Tea 5oz Loose Leaf",
    quantity: 49,
    price: 6.25,
  },
  {
    name: "Earl Grey Black Tea 5oz Loose Leaf",
    quantity: 91,
    price: 4.99,
  },
  {
    name: "Strawberry Rooibos Tea 5oz Loose Leaf",
    quantity: 26,
    price: 7.99,
  },
  {
    name: "Chamomile Tea 5oz Loose Leaf",
    quantity: 6,
    price: 4.99,
  },
  {
    name: "Orange Blossom Honey 16oz",
    quantity: 40,
    price: 24.99,
  },
  {
    name: "Raw Cane Sugar Cubes 8oz",
    quantity: 58,
    price: 10.99,
  },
];

class ShopDatabase {
  get = async () => {
    const itemData = itemDatabase;
    console.log(
      `The full array of items available in the shop and their quantities:`,
      itemData
    );
    return itemData;
  };
}

export const shopDatabase = new ShopDatabase();
