"use client";
import { FormEvent, useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import { Product } from "../../types/product-type";
import TextField from "../../components/Input/TextField";
import SortInput from "../../components/Input/SortInput";
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
} from "../../data/categories";
import ProductCardSkeleton from "../../components/Skeleton/ProductSkeleton";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useParams } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price-low-high");
  const [activeCat, setActiveCat] = useState<{
    label: string;
    value: string;
  }>({ label: "ทั้งหมด", value: "0" });
  const [category, setCategory] = useState<{ label: string; value: string }[]>(
    []
  );

  const params = useParams<{ categories: string }>();

  const categories = decodeURIComponent(params.categories);

  useEffect(() => {
    switch (categories) {
      case "ผักสด":
        setCategory(_static_category_vegetable_);
        break;
      case "เนื้อสัตว์":
        setCategory(_static_category_meat_);
        break;
      case "อาหารทะเล":
        setCategory(_static_category_seafood_);
        break;
      case "ไข่":
        setCategory(_static_category_egg_);
        break;
      case "เครื่องปรุง":
        setCategory(_static_category_sauce_);
        break;
      case "ของใช้ในครัว":
        setCategory(_static_category_kitchen_);
        break;
      case "ของดอง":
        setCategory(_static_category_aging_);
        break;
      default:
        setCategory(_static_category_);
        break;
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/products?category=${categories}`);
        const data = await response.json();
        setFilteredProducts(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products;

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeCat.value !== "0") {
      updatedProducts = updatedProducts.filter((product) =>
        product.category.includes(activeCat.label)
      );
    }

    updatedProducts.sort((a, b) => {
      if (sortBy === "price-low-high") {
        return a.prices[0].value - b.prices[0].value;
      } else if (sortBy === "price-high-low") {
        return b.prices[0].value - a.prices[0].value;
      } else if (sortBy === "name-a-z") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    setFilteredProducts(updatedProducts);
  }, [sortBy, activeCat, searchQuery, products]);

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value.trim());
  };

  return (
    <div className="text-center bg-light-main">
      <section className="text-3xl pb-4 pt-10 text-black mb-4 font-bold">
        รายการสินค้า {categories}
      </section>
      <section className="py-4">
        <TextField
          label=""
          type="text"
          placeholder="พิพม์เพื่อค้นหา"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="flex flex-nowrap overflow-auto space-x-2 px-2">
          {category.map((item, idx) => (
            <button
              key={idx}
              onClick={() =>
                setActiveCat(
                  activeCat.value === item.value
                    ? { label: "ทั้งหมด", value: "0" }
                    : item
                )
              }
              className={`py-4 px-6 text-nowrap border rounded-xl flex items-center gap-2 ${
                item.value === activeCat.value
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
      <section className="grid grid-cols-2 gap-4 p-4">
        {loading
          ? [...Array(6)].map((_, i) => <ProductCardSkeleton key={i} />)
          : filteredProducts.map((product, idx) => (
              <ProductCard key={idx} className="w-full bg-white" {...product} />
            ))}
      </section>
      <section>
        {!loading && filteredProducts.length === 0 && (
          <div className="text-gray-600 text-2xl pt-36 pb-40">
            ไม่พบรายการสินค้า
          </div>
        )}
      </section>
    </div>
  );
}
