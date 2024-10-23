"use client";
import { FormEvent, useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { normalProducts } from "../data/vegetables";
import { Product } from "../types/product-type";
import TextField from "../components/Input/TextField";
import SortInput from "../components/Input/SortInput";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loadings, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState("price-low-high");
  const [activePage, setActivePage] = useState(1);

  const loadMoreProducts = () => {
    setLoading(true);
    setProducts(normalProducts);
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

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value.trim());
  };

  useEffect(() => {
    let sortedProducts = [...products];

    if (sortBy === "price-low-high") {
      sortedProducts.sort((a, b) => a.prices[0].value - b.prices[0].value);
    } else if (sortBy === "price-high-low") {
      sortedProducts.sort((a, b) => b.prices[0].value - a.prices[0].value);
    } else if (sortBy === "name-a-z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(sortedProducts);
  }, [sortBy]);

  return (
    <div className="text-center bg-light-main">
      <section className="text-3xl pb-4 pt-10 text-black mb-4 font-bold">
        รายการสินค้า
      </section>
      <section className="py-4 mßx-4">
        <TextField
          label=""
          type="text"
          placeholder="พิพม์เพื่อค้นหา"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="flex flex-nowrap overflow-auto space-x-2 px-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return (
              <button
                key={item}
                className={`py-2 px-4 text-nowrap border rounded-xl ${
                  activePage === item
                    ? "bg-light-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                 หมวดหมู่ - {item}
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex px-4 justify-between text-xl mb-4 items-center">
        <div>สินค้าทั้งหมด {filteredProducts.length}</div>
        <div>
          <SortInput sortBy={sortBy} setSortBy={setSortBy} />
        </div>
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
        {filteredProducts.length === 0 && searchQuery && (
          <div className="text-gray-600 text-2xl py-20">
            ไม่พบสินค้าตามคำที่ค้นหา
          </div>
        )}
      </section>
    </div>
  );
}
