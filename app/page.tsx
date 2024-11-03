"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/Product/ProductCard";
import { Product } from "./types/product-type";
import { useEffect, useState } from "react";
import {
  IconSalad,
  IconMeat,
  IconFish,
  IconEgg,
  IconBottle,
  IconToolsKitchen2,
  IconHourglassLow,
  IconTags,
} from "@tabler/icons-react";
import ProductCardSkeleton from "./components/Skeleton/ProductSkeleton";

const LandingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const _static_category_ = [
    {
      label: "ผักสด",
      icon: <IconSalad />,
    },
    {
      label: "เนื้อสัตว์",
      icon: <IconMeat />,
    },
    {
      label: "อาหารทะเล",
      icon: <IconFish />,
    },
    {
      label: "ไข่",
      icon: <IconEgg />,
    },
    {
      label: "เครื่องปรุง",
      icon: <IconBottle />,
    },
    {
      label: "ของใช้ในครัว",
      icon: <IconToolsKitchen2 />,
    },
    {
      label: "ของดอง",
      icon: <IconHourglassLow />,
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/products/highlight");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-light-main">
      <section className="bg-light-primary text-white  text-center">
        <Image
          src={"/images/logo/banner.png"}
          alt="banner"
          width={1000}
          height={100}
          className="w-full h-full object-cover"
        />
      </section>
      <section className="grid grid-flow-col overflow-scroll gap-4 py-12 px-6">
        {_static_category_.map((cat, idx) => (
          <Link
            key={idx}
            href={`/products/${cat.label}`}
            className="px-6 py-4  bg-white text-nowrap rounded-xl flex items-center space-x-2"
          >
            <p>{cat.icon}</p>
            <p className="text-md">{cat.label}</p>
          </Link>
        ))}
      </section>

      <section className="py-10 px-2 md:px-8 bg-gradient-to-br from-[#FF5F6D] to-[#FFC371] m-2 rounded-xl">
        <h2 className="text-3xl font-semibold text-left mb-10 pl-4 flex">
          <IconTags />
          สินค้าราคาพิเศษ
        </h2>
        <div className="grid grid-cols-2 w-full gap-4 p-4">
          {loading
            ? [...Array(6)].map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  name={product.name}
                  type={product.type}
                  otherNames={product.otherNames}
                  category={product.category}
                  image={product.image}
                  prices={product.prices}
                  className="w-full"
                />
              ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products/ทั้งหมด"
            className="bg-light-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700"
          >
            ดูสินค้าทั้งหมด
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          ทำไมต้องซื้อกับเรา ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-2xl font-semibold">สด / ใหม่</h3>
            <p className="mt-4 text-gray-700">
              เราเลือกสินค้าที่สดและใหม่ให้กับคุณ
              เพื่อให้คุณได้รับสินค้าที่มีคุณภาพดี
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-2xl font-semibold">ขนส่งรวดเร็ว</h3>
            <p className="mt-4 text-gray-700">
              เราจะออกรถเป็นเวลา ตามตารางการขนส่ง
              ท่านสามารถเลือกลงเวลาตามที่ท่านต้องการได้
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <h3 className="text-2xl font-semibold">ราคาโดนใจ</h3>
            <p className="mt-4 text-gray-700">เรานำขอเสนอผักคุณภาพดี ราคาถูก</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
