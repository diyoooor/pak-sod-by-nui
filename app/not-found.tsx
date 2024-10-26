import { IconBarrierBlock } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">กำลังปรับปรุงแก้ไข</h1>
      <IconBarrierBlock className="h-52 w-10/12 my-6" />
      <p className="text-xl">เรากำลังพัฒนาระบบให้ดียิ่งขึ้น</p>
      <p className="text-xl mb-6">ขออภัยในความไม่สะดวก</p>
      <a href="/" className="text-blue-500 underline">
        กลับหน้าหลัก
      </a>
    </div>
  );
}
