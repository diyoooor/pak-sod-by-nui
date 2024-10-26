// app/layouts/PublicLayout.tsx

import { ReactNode } from "react";
import NavbarHeader from "../Navbar/NavbarHeader";
import NavbarBottom from "../Navbar/NavbarBottom";
import Footer from "../Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavbarHeader />
      <div>{children}</div>
      <Footer />
      <NavbarBottom />
    </div>
  );
}
