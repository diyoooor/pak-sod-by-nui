import { IconCircleDashedCheck } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <section className="container mx-auto text-center">
      <h1 className="text-3xl font-bold text-light-primary text-center">
        การสั่งซื้อสำเร็จ!
      </h1>
      <p>
        <IconCircleDashedCheck className="text-center mx-auto w-36 h-36 my-10" />
      </p>
      <p className="p-4 text-xl">ขอบคุณสำหรับการสั่งซื้อค่ะ!</p>
      <div className="p-4 text-start">
        <p className="indent-4">
          เราได้รับคำสั่งซื้อของคุณแล้ว และกำลังดำเนินการจัดส่งให้เร็วที่สุด
          คุณสามารถตรวจสอบสถานะการสั่งซื้อได้โดยใช้หมายเลขสั่งซื้อ
          <Link href={"/"} className="text-light-primary px-1">
            [หมายเลขสั่งซื้อ]
          </Link>
          หากมีข้อสงสัย สามารถติดต่อเราได้
          <Link href={"/contract"} className="text-light-primary px-1">
            ที่นี่
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SuccessPage;
