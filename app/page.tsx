"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/Product/ProductCard";
import { Product } from "./types/product-type";
import { useEffect, useState } from "react";
import { highlightProducts } from "./data/vegetables";

const LandingPage = () => {
  const [products, setProducts] = useState<Product[]>(highlightProducts);

  useEffect(() => {}, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-light-primary text-white py-12 text-center">
        <h1 className="text-4xl font-semibold tracking-widest">
          โปรโมชัน พิเศษ
        </h1>
        <p className="mt-4 text-md  ">
          สั่งครบ 1,000 ส่งฟรี สะเดา,ปาดัง,ด่านนอก
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-8">สินค้าแนะนำ</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              otherNames={product.otherNames}
              category={product.category}
              image={product.image}
              prices={product.prices}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
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
