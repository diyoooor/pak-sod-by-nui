"use client";
import React from "react";
import { numberWithComma } from "../utils/common";
import { useLiffStore } from "../store/useLiffStore";
import useCartStore from "../store/cartStore";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { profile } = useLiffStore();
  const { cartItems, cartTotal, clearCart } = useCartStore();
  const router = useRouter();
  return (
    <section className="p-4">
      <h2 className="text-3xl font-semibold text-center mb-8">รายการสินค้า</h2>
      <section>
        <div className="grid grid-cols-1 bg-white p-4 rounded-lg ">
          <div className=" mb-2 flex justify-between ">
            <p className="text-xl font-bold">ข้อมูลในการจัดส่ง</p>
            <button className="self-end text-end border border-light-primary w-fit px-2 py-1 rounded-lg">
              แก้ไข
            </button>
          </div>
          <div className="w-full bg-gray-100 p-2 rounded-lg grid grid-cols-2 gap-1">
            <p className="font-bold">ชื่อผู้ซื้อ </p>
            <p>{profile.displayName}</p>
            <p className="font-bold">เบอร์ติดต่อ </p>
            <p>{profile.phoneNumber}</p>
            <p className="font-bold">ชื่อร้าน </p> <p>{profile.shopName}</p>
            <p className="font-bold">รายละเอียดเพิ่มเติม </p>
            <p>{profile.address}</p>
          </div>
        </div>
      </section>
      <section className="pt-2">
        <div className="grid grid-cols-1 bg-white rounded-lg p-2">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full border-b py-1 grid grid-cols-2 border-dotted px-2 "
            >
              <p>
                {item.name} x {item.quantity} {item.unit}
              </p>
              <p className="text-end">
                ฿ {numberWithComma((item.quantity * item.price).toFixed(2))}
              </p>
            </div>
          ))}
          <div className="p-2 grid grid-cols-2 underline-offset-2 underline decoration-double bg-gray-100 rounded-lg">
            <p>ทั้งหมด {cartItems.length} รายการ</p>
            <p className="text-end">
              ฿ {numberWithComma(cartTotal.toFixed(2))}
            </p>
          </div>
        </div>
      </section>
      <section className="p-4 fixed bottom-0 left-0 w-full  bg-slate-100 flex items-center flex-col">
        <button
          onClick={() => {
            clearCart();
            router.push("/success");
          }}
          className={`w-full border py-3 rounded-lg bg-light-primary  text-white`}
        >
          ยืนยันคำสั่งซื้อ
        </button>
      </section>
    </section>
  );
};

export default CheckoutPage;
