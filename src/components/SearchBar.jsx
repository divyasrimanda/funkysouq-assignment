"use client";

import Image from "next/image";

function SearchBar() {
  return (
    <div>
      <form className="flex items-center justify-between gap-4 bg-white p-2 rounded-md flex-1">
        <input
          type="text"
          name="name"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none"
        />
        <button className="cursor-pointer">
          <Image src="/search.png" alt="" width={16} height={16} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
