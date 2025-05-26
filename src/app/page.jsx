import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Image from "next/image";
import "./globals.css";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Categories</h1>
        <Categories />
      </div>
      <div className="mt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Sales</h1>
      </div>
      <div className="mt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="hidden sm:flex bg-pink-50 px-4 justify-between h-64 rounded-lg">
          <div className="w-2/3 flex flex-col items-start justify-center gap-6">
            <h2 className="text-4xl font-semibold leading-tight text-gray-700">
              Grab up to 50% off on
              <br /> Selected Products
            </h2>
            <button className="rounded-md text-lama py-3 px-4 bg-transparent hover:bg-lama hover:text-white border border-lama transition-all duration-300 ease-in-out rounded-3xl ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Offers</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-16 py-8">
        {/* Banner 1 */}
        <div className="relative w-full lg:w-1/4 md:w-1/4 h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px] overflow-hidden">
          <Image
            src="/sale-img2.png"
            alt="Banner 1"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Banner 2 */}
        <div className="relative w-full lg:w-1/4 md:w-1/4 h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px] overflow-hidden">
          <Image
            src="/sale-img.png"
            alt="Banner 2"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Banner 3 */}
        <div className="relative w-full lg:w-1/4 md:w-1/4 h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px] overflow-hidden">
          <Image
            src="/kids-sale-img.png"
            alt="Banner 3"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
