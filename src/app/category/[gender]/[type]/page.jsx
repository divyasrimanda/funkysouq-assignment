"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryPage() {
  const { gender, type } = useParams();
  const [subcategory, setSubcategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();

        const clothing = data.find((cat) => cat.name === "Clothing");

        if (clothing && clothing.children) {
          for (const group of clothing.children) {
            const match = group.children.find(
              (item) =>
                item.slug[0].toLowerCase() === gender &&
                item.slug[1].toLowerCase() === type
            );
            if (match) {
              setSubcategory({
                parent: group.name,
                name: match.name,
                slug: match.slug,
                products: match.products || [],
              });
              break;
            }
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch categories", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, [gender, type]);

  if (loading) return <div className="p-6">Loading...</div>;

  if (!subcategory) {
    return (
      <div className="p-6 text-red-600">
        Category not found for {gender} / {type}
      </div>
    );
  }

  return (
    <div className="p-6">
      <nav className="text-sm text-gray-600 mb-6">
        <ol className="flex flex-wrap justify-start gap-6 pl-10 mb-10 ">
          <li className="text-lg font-semibold mb-2">
            <Link href="/" className="hover:underline text-blue-600">
              Home
            </Link>
          </li>
          <li className="text-lg mb-2">/</li>
          <li className="text-lg mb-2">category</li>
          <li className="text-lg mb-2">/</li>
          <li className="text-lg mb-2">{gender}</li>
          {type && (
            <>
              <li className="text-lg mb-2">/</li>
              <li className="capitalize text-black font-medium text-lg">
                {type}
              </li>
            </>
          )}
        </ol>
      </nav>

      <div className="flex flex-wrap justify-center gap-6">
        {subcategory.products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="w-full sm:w-[45%] lg:w-[20%]"
          >
            <div className="p-4 border rounded shadow hover:shadow-lg transition">
              <div className="relative w-full h-[18rem] sm:w-[45%] lg:h-[38rem] lg:w-[100%]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
