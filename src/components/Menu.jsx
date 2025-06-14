"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../app/context/CartContext";

const Menu = ()  => {
    const [open, setOpen] = useState(false);
    const { cart } = useCart();
  return (
     <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/cart" className="text-lg font-medium">
        Cart ({cart.length})
      </Link>
        </div>
      )}
    </div>
  )
}

export default Menu;