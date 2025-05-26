"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function ProductPageClient({ id, categories }) {
  const { addToCart } = useCart();

  let foundProduct = null;
  let selectedCategory = null;
  let selectedGender = null;
  let selectedType = null;

  categories.forEach((mainCategory) => {
    mainCategory.children.forEach((gender) => {
      gender.children.forEach((type) => {
        type.products.forEach((product) => {
          if (product.id === id) {
            foundProduct = product;
            selectedCategory = mainCategory;
            selectedGender = gender;
            selectedType = type;
          }
        });
      });
    });
  });

  if (!foundProduct) return notFound();

  const handleAddToCart = () => {
    addToCart(foundProduct);
    console.log(foundProduct, "foundProduct");
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <ol className="flex flex-wrap items-center gap-2 pl-10 mb-10">
          <li className="text-lg font-semibold mb-2">
            <Link href="/" className="hover:underline text-blue-600">
              Home
            </Link>
          </li>
          <li className="text-lg font-semibold mb-2">/</li>
          <li className="text-lg mb-2">Category</li>
          {selectedCategory && (
            <>
              <li className="text-lg font-semibold mb-2">/</li>
              <li className="text-lg mb-2 font-semibold">Women</li>
              <li className="text-lg font-semibold mb-2">/</li>
              <li className="text-lg font-semibold mb-2">
                <Link
                  href={`/category/${selectedGender?.name.toLowerCase()}/${selectedType?.name.toLowerCase()}`}
                  className="hover:underline text-blue-600"
                >
                  {selectedType?.name}
                </Link>
              </li>
              <li className="text-lg font-semibold mb-2">/</li>
              <li className="capitalize text-black font-semibold text-lg mb-2">
                {foundProduct.name}
              </li>
            </>
          )}
        </ol>
      </nav>

      {/* Product Campaign */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="hidden sm:flex bg-pink-50 px-4 justify-between h-64 rounded-lg">
          <div className="w-2/3 flex flex-col items-start justify-center gap-6">
            <h2 className="text-4xl font-semibold leading-tight text-gray-700">
              Grab up to 50% off on <br /> Selected Products
            </h2>
            <button className="rounded-3xl bg-lama text-white py-3 px-5 text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6 max-w-6xl mx-auto flex flex-wrap gap-6 justify-center border rounded shadow mt-10">
        <div className="relative w-full h-[18rem] sm:w-[45%] lg:h-[28rem]">
          <Image
            src={foundProduct.image}
            alt={foundProduct.name}
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="w-full sm:w-[45%] flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">{foundProduct.name}</h1>
          <p className="text-xl text-gray-700 mb-2">${foundProduct.price}</p>
          <p className="text-gray-600 mb-4">
            Beautiful product for your style.
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-7 rounded-md text-lama py-3 px-4 bg-transparent hover:bg-lama hover:text-white border border-lama transition-all duration-300 ease-in-out rounded-3xl"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}
