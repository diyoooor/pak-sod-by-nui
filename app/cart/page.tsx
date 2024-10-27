"use client";

import Image from "next/image";
import useCartStore from "../store/cartStore";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";

const CartPage = () => {
  const { cartItems } = useCartStore();

  const isCartEmpty = cartItems.length === 0;
  return (
    <div className="p-4 ">
      <section className="flex justify-between my-4 items-center text-lg">
        <div className="flex">
          <IconShoppingCart className="h-5 text-light-primary" />
          <p>ทั้งหมด 10 รายการ</p>
        </div>
        <button className="text-light-primary">ลบทั้งหมด</button>
      </section>
      <section>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div
              key={index}
              className="w-full  flex space-x-4 justify-between my-2 rounded-lg bg-white"
            >
              <Image
                src={"/images/products/no-image.jpg"}
                width={100}
                height={80}
                alt="no image"
                className="p-2 pr-0"
              />
              <div className=" w-full flex justify-between p-2 ">
                <div>
                  <p className="font-bold text-xl">พริกหมี่</p>
                  <div>1 กิโลกรัม</div>
                  <div className="flex space-x-2">
                    <p>฿100</p>
                    <p className="text-red-500 line-through">฿100</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-evenly items-center bg-gray-50 rounded-lg font-bold">
                    <button className=" p-2 rounded-md text-xl">-</button>
                    <div>1</div>
                    <button className=" p-2 rounded-md text-xl">+</button>
                  </div>
                  <div className="text-center">
                    <div className="text-sm"> 50 kg</div>
                    <div className="text-sm">รวม: ฿ 50</div>
                    <button className="text-md flex items-center border rounded-lg p-2">
                      <IconTrash className="h-4 " />
                      <p> ลบสินค้า</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="p-4 fixed bottom-0 left-0 w-full  bg-slate-100 flex items-center flex-col">
        <div className="flex justify-between w-full mb-4 text-2xl font-bold">
          <h2>รวมทั้งหมด</h2>
          <h2>฿ 1,000</h2>
        </div>
        <button
          disabled={isCartEmpty}
          className={`w-full border py-3 rounded-lg ${
            isCartEmpty ? `bg-gray-400` : `bg-light-primary`
          }   text-white`}
        >
          ชำระเงิน
        </button>
      </section>
    </div>
  );
};

export default CartPage;
