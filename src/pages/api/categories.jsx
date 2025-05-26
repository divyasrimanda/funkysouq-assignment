export default function handler(req, res) {
  const categories = [
    {
      id: 1,
      name: "Clothing",
      children: [
        {
          id: 2,
          name: "Men",
          children: [
            {
              id: 3,
              name: "Shirts",
              slug: ["men", "shirts"],
              products: [
                {
                  id: "s1",
                  name: "Checks Shirt",
                  price: "49.99",
                  image: "/men-shirt-3.avif",
                },
                {
                  id: "s2",
                  name: "Cotton Shirt",
                  price: "59.99",
                  image: "/men-shirt-3.png",
                },
                {
                  id: "s3",
                  name: "Linen Shirt",
                  price: "69.99",
                  image: "/men-shirt-4.jpg",
                },
                {
                  id: "s4",
                  name: "Blazer",
                  price: "69.99",
                  image: "/men-blazer.png",
                },
                {
                  id: "s5",
                  name: "Formal Blazer",
                  price: "69.99",
                  image: "/men-formal-blazer.png",
                },
                {
                  id: "s6",
                  name: "Long Jacket",
                  price: "69.99",
                  image: "/men-long-jacket.png",
                },
                {
                  id: "s7",
                  name: "T-Shirt",
                  price: "69.99",
                  image: "/men-shirt.png",
                },
                {
                  id: "s3",
                  name: "T-Shirt",
                  price: "69.99",
                  image: "/men-tshirt.png",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Women",
          children: [
            {
              id: 3,
              name: "Shirts",
              slug: ["women", "shirts"],
              products: [
                {
                  id: "w-s1",
                  name: "Sweat Shirt",
                  price: "69.99",
                  image: "/women-shirt-2.png",
                },
                {
                  id: "w-s2",
                  name: "Cotton T-Shirt",
                  price: "77.99",
                  image: "/women-shirt-3.png",
                },
                {
                  id: "w-s3",
                  name: "Formal Shirt",
                  price: "90.99",
                  image: "/women-shirt-4.png",
                },
                  {
                  id: "w-s4",
                  name: "Dress",
                  price: "90.99",
                  image: "/women-dress-1.png",
                },
                  {
                  id: "w-s5",
                  name: "Sweat Shirt",
                  price: "90.99",
                  image: "/women-sweat-shirt.png",
                },
                  {
                  id: "w-s3",
                  name: "Long Jacket",
                  price: "90.99",
                  image: "/women-long-jacket.avif",
                },
                  {
                  id: "w-s3",
                  name: "Dress",
                  price: "90.99",
                  image: "/women-dress.png",
                },
                  {
                  id: "w-s3",
                  name: "Sweat Shirt",
                  price: "90.99",
                  image: "/women-shirt-1.png",
                },
              ],
            },
            
          ],
        },
        {
          id: 3,
          name: "Girls",
          children: [
            {
              id: 3,
              name: "Shirts",
              slug: ["girls", "shirts"],
              products: [
                {
                  id: "g-s1",
                  name: "Frock",
                  price: "69.99",
                  image: "/kids-girl-img1.png",
                },
                {
                  id: "g-s2",
                  name: "Cotton T-Shirt",
                  price: "77.99",
                  image: "/kids-girl-img2.png",
                },
                {
                  id: "g-s3",
                  name: "Frock",
                  price: "90.99",
                  image: "/kids-girl-img3.png",
                },
                {
                  id: "g-s4",
                  name: "Frock",
                  price: "90.99",
                  image: "/kids-girl-img4.png",
                },
                {
                  id: "g-s5",
                  name: "Shirt",
                  price: "90.99",
                  image: "/kids-girl-img5.png",
                },
                {
                  id: "g-s6",
                  name: "Shirt with Skirt",
                  price: "90.99",
                  image: "/kids-girl-img6.png",
                },
                 {
                  id: "g-s7",
                  name: "Frock",
                  price: "90.99",
                  image: "/kids-girl-img7.png",
                },
                 {
                  id: "g-s8",
                  name: "Dongris",
                  price: "90.99",
                  image: "/kids-girl-img8.png",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "Boys",
          children: [
            {
              id: 3,
              name: "Shirts",
              slug: ["boys", "shirts"],
              products: [
                {
                  id: "b-s1",
                  name: "Cotton T-Shirt",
                  price: "69.99",
                  image: "/kids-boy-img1.png",
                },
               
                {
                  id: "b-s3",
                  name: "Checks Shirt",
                  price: "90.99",
                  image: "/kids-boy-img3.png",
                },
                {
                  id: "b-s4",
                  name: "T-Shirt",
                  price: "90.99",
                  image: "/kids-boy-img4.png",
                },
                {
                  id: "b-s5",
                  name: "Jacket",
                  price: "90.99",
                  image: "/kids-boy-img5.png",
                },
                {
                  id: "b-s6",
                  name: "Jacket",
                  price: "90.99",
                  image: "/kids-boy-img6.png",
                },
                 {
                  id: "b-s2",
                  name: "Cotton T-Shirt",
                  price: "77.99",
                  image: "/kids-boy-img2.png",
                },
                 {
                  id: "b-s7",
                  name: "Formal Shirt with Pant",
                  price: "90.99",
                  image: "/kids-boy-img7.png",
                },
                 {
                  id: "b-s8",
                  name: "Shirt",
                  price: "90.99",
                  image: "/kids-boy-img8.png",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  res.status(200).json(categories);
}