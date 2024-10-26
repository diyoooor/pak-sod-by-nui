"use client";
import { FormEvent, Suspense, useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { normalProducts } from "../data/products";
import { Product } from "../types/product-type";
import TextField from "../components/Input/TextField";
import SortInput from "../components/Input/SortInput";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loadings, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState("price-low-high");
  const [activeCat, setActiveCat] = useState("");
  const [category, setCategory] = useState<{ id: number; label: string }[]>([]);

  const searchParams = useSearchParams();

  const categories = searchParams.get("categories");

  const _mock_category_vegetable_ = [
    {
      id: 2,
      label: "ร้านส้มตำ",
    },
    {
      id: 3,
      label: "อาหารตามสั่ง",
    },
  ];

  const _mock_category_meat_ = [
    {
      id: 2,
      label: "วัว",
    },
    {
      id: 3,
      label: "หมู",
    },
    {
      id: 4,
      label: "กบ",
    },
  ];

  const _mock_category_seafood_ = [
    {
      id: 2,
      label: "ปลา",
    },
    {
      id: 3,
      label: "หอย",
    },
    {
      id: 4,
      label: "กุ้ง",
    },
    {
      id: 5,
      label: "หมึก",
    },
  ];

  const _mock_category_egg_ = [
    {
      id: 2,
      label: "เบอร์ 0",
    },
    {
      id: 3,
      label: "เบอร์ 1",
    },
    {
      id: 4,
      label: "เบอร์ 2",
    },
    {
      id: 5,
      label: "เบอร์ 3",
    },
  ];

  const _mock_category_sauce_ = [
    {
      id: 2,
      label: "ซีอิ้วขาว",
    },
    {
      id: 3,
      label: "ซีอิ้วดำ",
    },
    {
      id: 4,
      label: "น้ำปลา",
    },
    {
      id: 5,
      label: "น้ำส้มสายชู",
    },
    {
      id: 6,
      label: "ผงชูรส",
    },
  ];

  const _mock_category_kitchen_ = [
    {
      id: 2,
      label: "ฟองน้ำ",
    },
    {
      id: 3,
      label: "น้ำยาล้างจาน",
    },
    {
      id: 4,
      label: "ถุง",
    },
  ];

  const _mock_category_aging_ = [
    {
      id: 2,
      label: "ผักกาดดอง",
    },
    {
      id: 3,
      label: "หน่อไม้ดอง",
    },
    {
      id: 4,
      label: "งาน",
    },
  ];

  const _mock_category_ = [
    {
      id: 1,
      label: "ผักสด",
    },
    {
      id: 2,
      label: "เนื้อสัตว์",
    },
    {
      id: 3,
      label: "อาหารทะเล",
    },
    {
      id: 4,
      label: "ไข่",
    },
    {
      id: 5,
      label: "เครื่องปรุง",
    },
    {
      id: 6,
      label: "ของใช้ในครัว",
    },
    {
      id: 7,
      label: "ของดอง",
    },
  ];

  useEffect(() => {
    switch (categories) {
      case "ผักสด":
        setCategory(_mock_category_vegetable_);
        break;
      case "เนื้อสัตว์":
        setCategory(_mock_category_meat_);
        break;
      case "อาหารทะเล":
        setCategory(_mock_category_seafood_);
        break;
      case "ไข่":
        setCategory(_mock_category_egg_);
        break;
      case "เครื่องปรุง":
        setCategory(_mock_category_sauce_);
        break;
      case "ของใช้ในครัว":
        setCategory(_mock_category_kitchen_);
        break;
      case "ของดอง":
        setCategory(_mock_category_aging_);
        break;
      default:
        setCategory(_mock_category_);
        break;
    }
  }, [searchParams]);

  const loadMoreProducts = () => {
    setLoading(true);
    if (categories) {
      const filtered = products.filter((product) =>
        product.type.includes(categories)
      );
      setProducts([...products, ...filtered]);
    }
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
      } else if (categories) {
        const newProduct = products.filter(
          (product) => product.type === categories
        );

        setFilteredProducts(newProduct);
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

    if (activeCat) {
      console.log(activeCat);
      sortedProducts = sortedProducts.filter((product) =>
        product.category.includes(activeCat)
      );
    }

    if (categories) {
      sortedProducts = sortedProducts.filter(
        (product) => product.type === categories
      );
    }

    setFilteredProducts(sortedProducts);
  }, [sortBy, activeCat]);

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
            {category.map((item, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() =>
                    item.label === activeCat
                      ? setActiveCat("")
                      : setActiveCat(item.label)
                  }
                  className={`py-4 px-6 text-nowrap border rounded-xl flex items-center gap-2 ${
                    item.label === activeCat
                      ? "bg-light-primary text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {item.label}
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
              type={product.type}
              otherNames={product.otherNames}
              category={product.category}
              image={product.image}
              prices={product.prices}
            />
          ))}
          {loadings && <div className="text-gray-600">กำลังโหลด...</div>}
          {filteredProducts.length === 0 && (
            <div className="text-gray-600 text-2xl py-40">
              ไม่พบรายการสินค้า
            </div>
          )}
        </section>
      </Suspense>
    </div>
  );
}
