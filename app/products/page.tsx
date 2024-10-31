"use client";
import { FormEvent, Suspense, useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { Product } from "../types/product-type";
import TextField from "../components/Input/TextField";
import SortInput from "../components/Input/SortInput";
import { useSearchParams } from "next/navigation";
import {
  _static_category_,
  _static_category_aging_,
  _static_category_egg_,
  _static_category_kitchen_,
  _static_category_meat_,
  _static_category_sauce_,
  _static_category_seafood_,
  _static_category_vegetable_,
} from "../data/categories";
import ProductCardSkeleton from "../components/Skeleton/ProductSkeleton";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("price-low-high");
  const [activeCat, setActiveCat] = useState("");
  const [category, setCategory] = useState<{ id: number; label: string }[]>([]);

  const searchParams = useSearchParams();
  const categories = searchParams.get("categories");

  // Set category based on query params
  useEffect(() => {
    const categoryMap: { [key: string]: any } = {
      ผักสด: _static_category_vegetable_,
      เนื้อสัตว์: _static_category_meat_,
      อาหารทะเล: _static_category_seafood_,
      ไข่: _static_category_egg_,
      เครื่องปรุง: _static_category_sauce_,
      ของใช้ในครัว: _static_category_kitchen_,
      ของดอง: _static_category_aging_,
    };
    setCategory(categoryMap[categories || "default"] || _static_category_);
  }, [categories]);

  // Infinite scroll to load more pages
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

  // Fetch products initially
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Debounced search and filtering
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let filtered = products;

      if (searchQuery) {
        setSuggestions(
          products
            .map((product) => product.name)
            .filter((name) =>
              name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else if (categories) {
        filtered = products.filter((product) => product.type === categories);
      }

      setFilteredProducts(filtered);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, products, categories]);

  // Sorting products
  useEffect(() => {
    let sortedProducts = [...filteredProducts];

    if (sortBy === "price-low-high") {
      sortedProducts.sort((a, b) => a.prices[0].value - b.prices[0].value);
    } else if (sortBy === "price-high-low") {
      sortedProducts.sort((a, b) => b.prices[0].value - a.prices[0].value);
    } else if (sortBy === "name-a-z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (activeCat) {
      sortedProducts = sortedProducts.filter((product) =>
        product.category.includes(activeCat)
      );
    }

    setFilteredProducts(sortedProducts);
  }, [sortBy, activeCat]);

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value.trim());
  };

  return (
    <div className="text-center bg-light-main">
      <section className="text-3xl pb-4 pt-10 text-black mb-4 font-bold">
        รายการสินค้า {categories}
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="py-4">
          <TextField
            label=""
            type="text"
            placeholder="พิพม์เพื่อค้นหา"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="flex flex-nowrap overflow-auto space-x-2 px-2">
            {category.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  setActiveCat(activeCat === item.label ? "" : item.label)
                }
                className={`py-4 px-6 text-nowrap border rounded-xl flex items-center gap-2 ${
                  item.label === activeCat
                    ? "bg-light-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        <section className="flex px-4 justify-between text-xl mb-4 items-center">
          <div>สินค้าทั้งหมด {filteredProducts.length}</div>
          <SortInput sortBy={sortBy} setSortBy={setSortBy} />
        </section>
        <section className="flex flex-wrap justify-center gap-2 pb-10 px-2">
          {loading
            ? [...Array(6)].map((_, i) => <ProductCardSkeleton key={i} />)
            : filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  className="w-[48%] bg-white"
                  {...product}
                />
              ))}
          {!loading && filteredProducts.length === 0 && (
            <div className="text-gray-600 text-2xl py-40">
              ไม่พบรายการสินค้า
            </div>
          )}
        </section>
      </Suspense>
    </div>
  );
}
