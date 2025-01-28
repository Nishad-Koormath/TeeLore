import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartProvider } from "@/contexts/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CartProvider>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 180px)" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
      </CartProvider>
    </>
  );
}
