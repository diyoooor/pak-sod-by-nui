"use client";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import ButtonLink from "../Button/ButtonLink";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCartStore from "@/app/store/cartStore";

const NavbarHeader = () => {
  const isAuthenticated = false;
  const { toggleCart, isCartOpen } = useCartStore();
  const navigate = useRouter();

  return (
    <nav className="sticky top-0 left-0 w-full bg-white h-20 px-2">
      <div className="flex justify-between items-center py-4 ">
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
          <ButtonLink href="/cart" icon={<IconShoppingCart />}></ButtonLink>
          {isAuthenticated ? (
            <ButtonLink href="/profile" icon={<IconUser />} />
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
