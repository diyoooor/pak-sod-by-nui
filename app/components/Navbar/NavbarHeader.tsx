"use client";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import ButtonLink from "../Button/ButtonLink";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLiffStore } from "@/app/store/useLiffStore";
import useCartStore from "@/app/store/cartStore";

const NavbarHeader = () => {
  const navigate = useRouter();

  const { isLoggedIn } = useLiffStore();
  const { productCount } = useCartStore();

  return (
    <nav className="sticky top-0 left-0 w-full bg-white h-20 px-2 ">
      <div className="flex justify-between items-center py-4  relative">
        <Image
          src={"/images/logo/logo.png"}
          width={120}
          height={50}
          className={"object-cover"}
          alt="logo"
          onClick={() => {
            navigate.push("/");
          }}
        />
        <div className="flex items-center">
          {isLoggedIn ? (
            <>
              <div className="relative">
                <ButtonLink
                  href="/cart"
                  icon={<IconShoppingCart />}
                ></ButtonLink>
                {productCount > 0 && (
                  <span className="absolute top-0 right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {productCount}
                  </span>
                )}
              </div>
              <ButtonLink href="/profile" icon={<IconUser />} />
            </>
          ) : (
            <ButtonLink
              href="/auth"
              className="border active:bg-green-50"
              label="เข้าสู่ระบบ"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarHeader;
