"use client";

import Image from "next/image";
import { useCart } from "../app/context/CartContext";
import Link from "next/link";

const CartModel = () => {
  const { cart, removeFromCart, total } = useCart();
  console.log(cart, "cartItems");
  return (
    <>
      <div className="w-max absolute p-4 rounded-md shadow bg-white top-12 right-0 flex flex-col gap-6 z-20">
        {cart?.length === 0 ? (
          <div>Cart is Empty</div>
        ) : (
          cart?.map((item) => (
            <>
              <div key={item.id} className="flex gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={72}
                  height={96}
                  className="object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lama">{item.name}</h3>
                  <p className="font-semibold">${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200 text-right font-semibold">
                Total: ${Number(total).toFixed(2)}
              </div>
              <Link href="/cart">
                <p className="text-lama">View Cart</p>
              </Link>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default CartModel;
