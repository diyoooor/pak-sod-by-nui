import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const BlankLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <section className="flex  p-4 items-center w-screen justify-between bg-gray-200">
        <div className="flex text-nowrap w-full text-light-primary">
          <button
            onClick={() => {
              router.back();
            }}
          >
            <div className="flex items-center space-x-2">
              <IconArrowLeft />
              <p>ย้อนกลับ</p>
            </div>
          </button>
        </div>
        <div className="w-fit">
          <Image
            onClick={() => {}}
            src={"/images/logo/logo.png"}
            width={100}
            height={50}
            className={"object-cover"}
            alt="logo"
          />
        </div>
        <div></div>
      </section>
      <section className="bg-gray-200 min-h-screen">{children}</section>
    </>
  );
};

export default BlankLayout;
