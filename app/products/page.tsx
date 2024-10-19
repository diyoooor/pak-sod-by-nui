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

  const handleSearch = (query: string) => {
    setSuggestions([]);
    setSearchQuery(query);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section className="text-center">
      <div className="text-2xl py-4 border  bg-light-primary mb-4 text-white">
        รายการสินค้าทั้งหมด
      </div>

      <div className="relative mb-6 max-w-md mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="พิมพ์เพื่อค้นหา"
          className="w-full p-3 border rounded-lg pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <div className="absolute left-3 top-3 text-gray-500">🔍</div>
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border w-full mt-1 max-h-40 overflow-auto z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSearch(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-3 text-gray-500"
          >
            ✖
          </button>
        )}
      </div>

      <section className="flex flex-wrap justify-center gap-4 ">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index + "-" + product.name}
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
    </section>
  );
}
