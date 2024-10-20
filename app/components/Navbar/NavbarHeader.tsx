"use client";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";
import ButtonLink from "../Button/ButtonLink";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarHeader = () => {
  // TODO :: Is authentication logic mocking
  const isAuthenticated = false;

  const navigate = useRouter();

  return (
    <nav className="sticky top-0 left-0 w-full bg-white h-20">
      <div className="flex justify-around items-center py-4 ">
        <Image
          src={"/images/logo/logo.png"}
          width={120}
          height={50}
          className={"object-cover"}
          alt="logo"
          onClick={() => {
            // TODO :: Handle click event
            navigate.push("/");
          }}
        />
        <div className="flex items-center">
          <ButtonLink href="/" icon={<IconShoppingCart />} />
          {isAuthenticated ? (
            <ButtonLink href="/profile" icon={<IconUser />} />
          ) : (
            <ButtonLink
              href="/"
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
