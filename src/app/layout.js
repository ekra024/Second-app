import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
  template: "%s | Technical Agency",
  default:"Technical Agency"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="text-center bg-green-100 mb-10">Header</h1>
        {children}
        <h1 className="text-center bg-amber-50 mt-10">Footer</h1>
      </body>
    </html>
  );
}
