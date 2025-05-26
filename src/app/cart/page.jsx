"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <>
          <p className="text-gray-600 mb-5">Your cart is empty.</p>
          <Link href="/" className="hover:underline text-blue-600 mt-5">
            Back to Home
          </Link>
        </>
      ) : (
        <div className="space-y-6 bg-white p-5 rounded-md shadow-sm">
          {cart.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={120}
                  className="object-cover rounded-md"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-lama">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline whitespace-nowrap"
                >
                  Remove
                </button>
              </div>

              <hr className="border-t border-gray-300" />
            </div>
          ))}

          <div className="flex justify-between font-semibold text-lg pt-4">
            <span>Total</span>
            <span>${Number(total).toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
