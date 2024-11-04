"use client";
import React, { useEffect } from "react";
import { useLiffStore } from "../store/useLiffStore";

const AuthPage = () => {
  const { error, login } = useLiffStore();

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4  w-full">
      <h1 className="text-3xl font-semibold mb-6">
        กรุณาเข้าสู่ระบบเพื่อใช้งาน
      </h1>
      <section className=" w-8/12 flex flex-col gap-4">
        <button
          onClick={login}
          className="flex items-center justify-center px-6 py-3 rounded-lg bg-green-500 text-white  transition "
        >
          <img
            src="/images/logo/line-icon.png"
            alt="LINE"
            className="w-6 h-6 mr-2"
          />
          ลงชื่อเข้าใช้ด้วย LINE
        </button>
      </section>
    </div>
  );
};

export default AuthPage;
