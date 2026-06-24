import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata = {
  title: "D'Woody Shop — Bespoke Furniture, Crafted by Hand",
  description:
    "D'Woody Shop is a bespoke furniture company designing, producing and selling high-quality, durable, handcrafted furniture for homes, offices, schools and hospitality across Ghana and beyond.",
  keywords: [
    "bespoke furniture",
    "handcrafted wood",
    "furniture Ghana",
    "custom furniture Accra",
    "wood craftsmanship",
  ],
  openGraph: {
    title: "D'Woody Shop — Bespoke Furniture, Crafted by Hand",
    description:
      "High-quality, durable, handcrafted furniture for homes, offices and hospitality across Ghana.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream font-sans text-espresso antialiased selection:bg-wood-500 selection:text-cream">
        {children}
      </body>
    </html>
  );
}
