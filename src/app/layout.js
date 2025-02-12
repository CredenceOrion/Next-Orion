import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CustomCss/CustomStyle.css";
import "../styles/CustomCss/Margins.css";
import ScrollButton from "../components/ScrollTopButton/ScrollTopButton";  // Correct import
import ScrollToTop from "../components/ScrollTopButton/ScrollToTop"; // Correct import

export const metadata = {
  title: "Orion Marine Concepts", 
  description: "Official website of Orion Marine Concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App" data-new-gr-c-s-check-loaded="14.1222.0" data-gr-ext-installed="">
        <HeaderComponent/>
        <main>{children}</main> 
        <FooterComponent /> 
        <ScrollButton/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
