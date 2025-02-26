import HeaderFooterWrapper from "../components/HeaderFooterWrapper";
import ScrollButton from "../components/ScrollTopButton/ScrollTopButton";  
import ScrollToTop from "../components/ScrollTopButton/ScrollToTop";  
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../styles/CustomCss/CustomStyle.css";
import "../styles/CustomCss/Margins.css";


export const metadata = {
  icons: {
    icon: "/logoFav.ico", 
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="App">
        <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
        <ScrollButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
