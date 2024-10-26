"use client";
import { ReactNode } from "react";
import "./globals.css";
import RootLayout from "./components/Layouts/RootLayout";
import AuthLayout from "./components/Layouts/AuthLayout";
import PublicLayout from "./components/Layouts/PublicLayout";
import BlankLayout from "./components/Layouts/BlankLayout";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  const isAuthenticated = false;

  return (
    <RootLayout>
      {isAuthenticated ? (
        <AuthLayout>Auth</AuthLayout>
      ) : ["/cart", "/search"].includes(pathName) ? (
        <BlankLayout>{children}</BlankLayout>
      ) : (
        <PublicLayout>{children}</PublicLayout>
      )}
    </RootLayout>
  );
}
