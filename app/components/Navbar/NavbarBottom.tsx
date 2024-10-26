"use client";
import { useState } from "react";
import { IconHome, IconSearch } from "@tabler/icons-react";
import ButtonLink from "../Button/ButtonLink";
import useCartStore from "@/app/store/cartStore";

const NavbarBottom = () => {
  const [activePath, setActivePath] = useState<string>("/");

  const navMenu = [
    {
      label: "หน้าแรก",
      href: "/",
      icon: <IconHome />,
    },
    {
      label: "ค้นหา",
      href: "/search",
      icon: <IconSearch />,
    },
  ];

  return (
    <>
      <nav className="fixed bottom-0  w-full bg-white left-0 ">
        <div className="flex justify-around items-center py-4 h-20">
          {navMenu.map((item, index) => (
            <div key={index} onClick={() => setActivePath(item.href)}>
              <ButtonLink
                label={item.label}
                href={item.href}
                icon={item.icon}
                className={`relative  ${
                  activePath === item.href
                    ? "text-light-primary text-lg"
                    : "text-gray-400"
                }`}
              />
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};
export default NavbarBottom;
