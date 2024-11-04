"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "../../types/product-type";
import ProductModal from "./ProductModal";

interface ProductCartProps extends Product {
  className?: string;
}

const ProductCard: React.FC<ProductCartProps> = ({ className, ...product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = (item: {
    quantity: number;
    unit: string;
    product: Product;
  }) => {
    console.log(
      `Added ${item.quantity} ${item.unit} of ${item.product.name} to cart`
    );
  };
  return (
    <div
      className={`shadow-md  p-2 flex flex-col items-center  overflow-hidden rounded-lg bg-white h-full   ${className}`}
    >
      <Image
        src={product.image || "/images/no-image.jpg"}
        alt={product.name}
        width={200}
        height={250}
        className={"h-full object-fill p-4"}
      />
      <h2 className="text-xl font-light text-light-primary mt-4">
        {product.name}
      </h2>

      <div className="flex space-x-2 text-sm">
        {product.prices[0].value} บาท / {product.prices[0].label}
      </div>

      <button
        className="mt-6 bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800 w-full"
        onClick={() => setIsOpen(true)}
      >
        สั่งซื้อ
      </button>
      <ProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={product}
        addToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductCard;
