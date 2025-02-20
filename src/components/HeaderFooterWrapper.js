"use client"; // ✅ This must be a Client Component

import { usePathname } from "next/navigation";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import "../styles/CustomCss/CustomStyle.css";
import "../styles/CustomCss/Margins.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
export default function HeaderFooterWrapper({ children }) {
  const path = usePathname(); // ✅ Now this is inside a Client Component

  const hideHeaderFooter = path?.startsWith("/oursupportteam") || 
                           path?.startsWith("/ourmanagementteam") || 
                           path?.startsWith("/ourteamdevs") ||
                           path?.startsWith("/mamtakanyal") ||
                           path?.startsWith("/captmohitsabharwal");

  return (
    <>
      {!hideHeaderFooter && <HeaderComponent />}
      <main>{children}</main>
      {!hideHeaderFooter && <FooterComponent />}
    </>
  );
}
