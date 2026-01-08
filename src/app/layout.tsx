import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google"; // Import Architects Daughter
import "./globals.css";

const architectsDaughter = Architects_Daughter({
  variable: "--font-notebook",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dominion",
  description: "Web3 Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${architectsDaughter.variable} antialiased`} // Apply font-sans class
      >
        {children}
      </body>
    </html>
  );
}
