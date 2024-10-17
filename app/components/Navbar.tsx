"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconHome,
  IconShoppingCart,
  IconBrandApplePodcast,
  IconSearch,
} from "@tabler/icons-react";
import Link from "next/link";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navMenu = [
    {
      id: 0,
      label: "หน้าหลัก",
      href: "/",
      icon: <IconHome />,
    },
    {
      id: 1,
      label: "สินค้า",
      href: "/products",
      icon: <IconSearch />,
    },
    {
      id: 2,
      label: "ตะกร้า",
      href: "/cart",
      icon: <IconShoppingCart />,
    },
    {
      id: 3,
      label: "โปรไฟล์",
      href: "/profile",
      icon: <IconBrandApplePodcast />,
    },
  ];

  const getAnimationDirection = (index: number) => {
    return activeIndex < index ? "right" : "left";
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 left-0">
      <div className="flex justify-around items-center py-4 ">
        {navMenu.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative cursor-pointer text-white    ${
              activeIndex === index ? "text-green-500" : "text-gray-400"
            }`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={item.href} className="flex flex-col">
              <span className="mx-auto ">{item.icon}</span>
              <span>{item.label}</span>
            </Link>

            {activeIndex === index && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1  bg-green-500 "
                initial={
                  getAnimationDirection(index) === "right"
                    ? { x: -100 }
                    : { x: 100 }
                }
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
