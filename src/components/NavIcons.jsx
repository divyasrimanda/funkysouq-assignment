"use client";

import Image from "next/image";

import { useState } from "react";
import CartModel from "./CartModel";
import { useCart } from "../app/context/CartContext";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;
  const { cart } = useCart();
  const handleProfile = () => {
    if (!isLoggedIn) {
      setIsProfileOpen((prev) => !prev);
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 xl:gap-6 relative">
        <Image
          src="/profile.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleProfile}
        />
        {isProfileOpen && (
          <div className="absolute p-4 rounded-md top-6 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <div className="mt-2 cursor-pointer">Profile</div>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        )}

        <Image
          src="/notification.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />

        <div className="relative cursor-pointer">
          <Image
            src="/cart.png"
            alt=""
            width={22}
            height={22}
            className="cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
          />

          {cart.length > 0 && (
            <div
              className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse"
              aria-label={`Cart has ${cart.length} item${
                cart.length > 1 ? "s" : ""
              }`}
            >
              {cart.length}
            </div>
          )}
        </div>
        {isCartOpen && <CartModel />}
      </div>
    </div>
  );
}

export default NavIcons;
