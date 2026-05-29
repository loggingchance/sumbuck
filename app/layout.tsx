import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SumBuck",
  description: "Practice hardwood log bucking with product-specific defect feedback."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
