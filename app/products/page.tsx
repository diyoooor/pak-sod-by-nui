"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { getPaginatedVegetables } from "../data/vegetables";
import { Product } from "../types/product-type";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loadings, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const loadMoreProducts = () => {
    setLoading(true);
    const newProducts = getPaginatedVegetables(page, 10);
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreProducts();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 5
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const filteredSuggestions = products
          .map((product) => product.name)
          .filter((name) =>
            name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        setSuggestions(filteredSuggestions);

        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setSuggestions([]);
        setFilteredProducts(products);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, products]);

  return (
    <div className="text-center bg-light-main">
      <section className="text-2xl py-4 border  bg-light-primary mb-4 text-white">
        รายการสินค้า
      </section>

      <section className="flex flex-wrap justify-center gap-2 pb-10 px-2">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index + "-" + product.name}
            className="w-[48%] bg-white"
            id={product.id}
            name={product.name}
            otherNames={product.otherNames}
            category={product.category}
            image={product.image}
            prices={product.prices}
          />
        ))}
        {loadings && <div className="text-gray-600">กำลังโหลด...</div>}
      </section>
    </div>
  );
}
