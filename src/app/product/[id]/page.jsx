import ProductPageClient from "./ProductPageClient";

async function getCategories() {
  const res = await fetch("http://localhost:3000/api/categories");
  const data = await res.json();
  return data;
}

export default async function ProductPage({ params }) {
  const categories = await getCategories();
  return <ProductPageClient id={params.id} categories={categories} />;
}
