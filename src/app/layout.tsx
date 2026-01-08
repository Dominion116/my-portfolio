import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google"; // Import Architects Daughter
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${architectsDaughter.variable} antialiased`} // Apply font-sans class
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
