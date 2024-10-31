import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-[48%] animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
    </div>
  );
};

export default ProductCardSkeleton;
