import { Inter } from "next/font/google";
import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { CartProvider } from "../app/context/CartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>e-mAX</title>
        <meta name="description" content="Shop your favorite products" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <NavbarComponent />
          <main>{children}</main>
          <FooterComponent />
        </CartProvider>
      </body>
    </html>
  );
}
