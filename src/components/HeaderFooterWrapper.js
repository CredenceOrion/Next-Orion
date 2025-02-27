"use client"; // ✅ This must be a Client Component

import { usePathname } from "next/navigation";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";

export default function HeaderFooterWrapper({ children }) {
  const path = usePathname(); // ✅ Now this is inside a Client Component
//console.log("Current Path:", path); // ✅ Debugging the path
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
