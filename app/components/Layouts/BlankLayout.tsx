import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const BlankLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className="flex  p-4 items-center w-screen justify-between">
        <div className="flex text-nowrap w-full">
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <IconArrowLeft />
              <p>ย้อนกลับ</p>
            </div>
          </Link>
        </div>
        <div className="w-fit">
          <Image
            src={"/images/logo/logo.png"}
            width={100}
            height={50}
            className={"object-cover"}
            alt="logo"
          />
        </div>
        <div></div>
      </section>
      <section>{children}</section>
    </>
  );
};

export default BlankLayout;