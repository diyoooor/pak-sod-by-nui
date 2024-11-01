"use client";
import { ReactNode, useEffect } from "react";
import "./globals.css";
import RootLayout from "./components/Layouts/RootLayout";
import AuthLayout from "./components/Layouts/AuthLayout";
import PublicLayout from "./components/Layouts/PublicLayout";
import BlankLayout from "./components/Layouts/BlankLayout";
import { usePathname } from "next/navigation";
import { useLiffStore } from "./store/useLiffStore";

export default function Layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  const { initializeLiff } = useLiffStore();

  useEffect(() => {
    initializeLiff();
  }, [initializeLiff]);

  return (
    <RootLayout>
      {["/cart", "/search", "/auth"].includes(pathName) ? (
        <BlankLayout>{children}</BlankLayout>
      ) : (
        <PublicLayout>{children}</PublicLayout>
      )}
    </RootLayout>
  );
}
