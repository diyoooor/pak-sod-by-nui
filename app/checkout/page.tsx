"use client";
import React from "react";
import { numberWithComma } from "../utils/common";
import { useLiffStore } from "../store/useLiffStore";

const CheckoutPage = () => {
  const { profile } = useLiffStore();
  const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          {mock.map((item, idx) => (
            <div
              key={idx}
              className="w-full border-b py-1 grid grid-cols-2 border-dotted px-2 "
            >
              <p>{item}.ชื่อผัก x 10 กก</p>
              <p className="text-end">฿ {numberWithComma("199")}</p>
            </div>
          ))}
          <div className="pt-4 grid grid-cols-2 text-xl">
            <p>ทั้งหมด {mock.length} รายการ</p>
            <p className="text-end">฿ {numberWithComma("199")}</p>
          </div>
        </div>
      </section>
      <section className="p-4 fixed bottom-0 left-0 w-full  bg-slate-100 flex items-center flex-col">
        <div className="flex justify-between w-full mb-4 text-2xl font-bold">
          <h2>ยอดสุทธิ</h2>
          <h2>฿ {numberWithComma(999)}</h2>
        </div>
        <button
          onClick={() => {}}
          className={`w-full border py-3 rounded-lg bg-light-primary  text-white`}
        >
          ดำเนินการ
        </button>
      </section>
    </section>
  );
};

export default CheckoutPage;
