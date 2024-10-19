"use client";
import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "มะเขือเทศ",
      quantity: 2,
      pricePerUnit: 3.99,
      unit: "กก.",
    },
    {
      id: 2,
      name: "แตงกวา",
      quantity: 1,
      pricePerUnit: 2.49,
      unit: "ถุงห",
    },
  ]);
  const deliveryFee = 5.0;
  const promoDiscount = 2.0;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.pricePerUnit * item.quantity,
    0
  );
  const total = subtotal + deliveryFee - promoDiscount;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">สรุปรายการ</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-4 ">
            <div>
              <h2 className="text-lg font-semibold">
                {item.name} x {item.quantity} {item.unit}
              </h2>
              <p>${item.pricePerUnit.toFixed(2)}</p>
            </div>
            <p className="text-lg font-semibold">
              ${(item.pricePerUnit * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between mb-2">
          <p>ราคารวม</p>
          <p>{subtotal.toFixed(2)} บาท</p>
        </div>
        <div className="flex justify-between mb-2 text-red-500">
          <p>ส่วนลด โปรโมชัน</p>
          <p>-{promoDiscount.toFixed(2)} บาท</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>ค่าส่ง</p>
          <p>{deliveryFee.toFixed(2)} บาท</p>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <p>ยอดทั้งหมด</p>
          <p>${total.toFixed(2)} บาท</p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700">
          ยืนยันการสั่งซื้อ
        </button>
      </div>
    </div>
  );
};

export default CartPage;
