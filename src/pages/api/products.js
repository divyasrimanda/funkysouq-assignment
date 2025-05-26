export default function handler(req, res) {
  const products = [
    {
      id: 101,
      name: "Men's Blue Shirt",
      price: 29.99,
      image: "/men-shirt-3.png",
      categoryPath: ["men", "shirts"],
    },
    {
      id: 102,
      name: "Women's Floral Dress",
      price: 39.99,
      image: "/women-shirt-1.png",
      categoryPath: ["women", "shirts"],
    },
    {
      id: 103,
      name: "girl's Floral Dress",
      price: 49.99,
      image: "/kids-girl-img1.png",
      categoryPath: ["girls", "shirts"],
    },
    {
      id: 104,
      name: "boy's Shirt",
      price: 34.99,
      image: "/kids-boy-img1.png",
      categoryPath: ["boys", "shirts"],
    },
    {
      id: 105,
      name: "Men's Casual Tee",
      price: 25.0,
      image: "/men-shirt-4.jpg",
      categoryPath: ["men", "shirts"],
    },
    {
      id: 106,
      name: "Women's Summer Top",
      price: 35.0,
      image: "/women-shirt-2.png",
      categoryPath: ["women", "shirts"],
    },
    {
      id: 107,
      name: "Girl's Polka Shirt",
      price: 27.5,
      image: "/kids-girl-img2.png",
      categoryPath: ["girls", "shirts"],
    },
    {
      id: 108,
      name: "Boy's Checkered Shirt",
      price: 32.0,
      image: "/kids-boy-img2.png",
      categoryPath: ["boys", "shirts"],
    },
  ];

  res.status(200).json(products);
}
