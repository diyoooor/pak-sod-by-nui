"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "../../types/product-type";
import ProductModal from "./ProductModal";

const ProductCard: React.FC<Product> = (product) => {
  const [selectedUnit, setSelectedUnit] = useState<string>("1kg");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectUnit = (unit: string) => () => {
    setSelectedUnit(unit);
  };

  const handleAddToCart = (item) => {
    console.log(
      `Added ${item.quantity} ${item.unit} of ${item.product.name} to cart`
    );
  };
  return (
    <div className="border rounded-lg shadow-md bg-white p-4 flex flex-col items-center  overflow-hidden">
      <Image
        src={"/images/no-image.jpg"}
        alt={product.name}
        width={200}
        height={200}
        className="rounded-md"
      />
      <h2 className="text-2xl font-light text-green-700 mt-4">
        {product.name}
      </h2>

      <div className="mt-4 flex space-x-2 ">
        {product.prices[0].value} ต่อ {product.prices[0].label}
      </div>

      <button
        className="mt-6 bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800"
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
