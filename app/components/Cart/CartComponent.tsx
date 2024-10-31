"use client";
import React from "react";
import useCartStore from "@/app/store/cartStore";
import { Product } from "@/app/types/product-type";

const CartComponent: React.FC = () => {
  const { cartItems, isCartOpen, toggleCart } = useCartStore();

  return (
    <>
      {isCartOpen && (
        <div className="min-h-screen  fixed top-0  min-w-screen bg-white w-full">
          <div className="flex justify-end px-4">
            <button
              onClick={() => toggleCart()}
              className="text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
          <h1 className="text-3xl font-semibold text-center mb-6">
            Shopping Cart
          </h1>

          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, idx) => (
                <div
                  key={idx + "-" + item.unit}
                  className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-xl font-semibold">
                      {item.product.name}
                    </h2>
                    <p className="text-gray-500">Unit: {item.unit}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>
                      Price: $
                      {(item.product.prices[0].value * item.quantity).toFixed(
                        2
                      )}
                    </p>
                  </div>
                  <button className="text-red-600">Remove</button>
                </div>
              ))}

              <div className="text-xl font-semibold mt-6"></div>
              <button className="mt-4 py-2 px-4 bg-red-600 text-white rounded">
                Clear Cart
              </button>
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              Your cart is empty.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default CartComponent;
