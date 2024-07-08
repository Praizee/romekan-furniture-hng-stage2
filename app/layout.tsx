import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    // template: "%s | ROMEKAN",
    // default: "ROMEKAN - Where style meets Comfort and Quality",
    template: "%s | Timbu Cloud Shop",
    default: "Timbu Cloud Shop",
  },
  description: "Timbu Cloud Shop Mini Online Store",

  keywords: ["ROMEKAN"],
  // openGraph: {
  //   images: "/opengraph-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
