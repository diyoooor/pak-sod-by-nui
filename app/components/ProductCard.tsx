"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "../types/Product";

const ProductCard: React.FC<Product> = ({ name, prices }) => {
  const [selectedUnit, setSelectedUnit] = useState<string>("1kg");

  const handleSelectUnit = (unit: string) => () => {
    setSelectedUnit(unit);
  };
  return (
    <div className="border rounded-lg shadow-md bg-white p-4 flex flex-col items-center ">
      <Image
        src={"/images/no-image.jpg"}
        alt={name}
        width={200}
        height={200}
        className="rounded-md"
      />
      <h2 className="text-2xl font-light text-green-700 mt-4">{name}</h2>

      <div className="mt-4 flex space-x-2">
        {prices.map((unit) => (
          <button
            key={unit.id + "-" + unit.label + "-" + unit.value}
            className={`py-1 px-3 rounded-md ${
              selectedUnit === unit.label
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={handleSelectUnit(unit.label)}
          >
            {unit.label}
          </button>
        ))}
      </div>

      <button className="mt-6 bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800">
        ใส่ตะกร้า
      </button>
    </div>
  );
};

export default ProductCard;
