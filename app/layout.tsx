import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ecomuebles",
  description:
    "Descubre nuestra amplia selección de muebles de segunda mano de alta calidad. Nuestra tienda en línea ofrece una variedad de estilos y opciones para adaptarse a tus necesidades. Compra desde la comodidad de tu hogar y disfruta de nuestros precios asequibles y entrega rápida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </html>
  );
}
