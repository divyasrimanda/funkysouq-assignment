import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/category/men/shirts"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <h2 className="absolute top-4 left-4 z-30 text-white text-xl font-bold bg-black/60 px-3 py-1 rounded">
            Shop Men
          </h2>
          <Image
            src="/men-shirt-3.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/men-shirt-4.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
      </Link>

      <Link
        href="/category/women/shirts"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <h2 className="absolute top-4 left-4 z-30 text-white text-xl font-bold bg-black/60 px-3 py-1 rounded">
            Shop Women
          </h2>
          <Image
            src="/women-shirt-1.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/women-shirt-2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
      </Link>

      <Link
        href="/category/girls/shirts"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <h2 className="absolute top-4 left-4 z-30 text-white text-xl font-bold bg-black/60 px-3 py-1 rounded">
            Shop Girl
          </h2>
          <Image
            src="/kids-girl-img1.png"
            alt="girl's Floral Dress"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/kids-girl-img2.png"
            alt="girl's Floral Dress"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
      </Link>

      <Link
        href="/category/boys/shirts"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <h2 className="absolute top-4 left-4 z-30 text-white text-xl font-bold bg-black/60 px-3 py-1 rounded">
            Shop Boy
          </h2>
          <Image
            src="/kids-boy-img1.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/kids-boy-img2.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
        </div>
      </Link>
    </div>
  );
};
export default Categories;
