
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavbarDemo from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "sdsbharatinfratech",
//   description:
//     "SDS Bharat Infratech - Construction, Architecture and Infrastructure Solutions.",
//   icons: {
//     icon: "/images/home/SDS.png",
//     shortcut: "/images/home/SDS.png",
//     apple: "/images/home/SDS.png",
//   },
// };

export const metadata = {
  title: "sdsbharatinfratech",
  description: "sdsbharatinfratech",
  icons: [
    { rel: "icon", url: "/images/home/SDS.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/images/home/SDS.png", sizes: "48x48", type: "image/png" },
    { rel: "icon", url: "/images/home/SDS.png", type: "image/x-icon" }, // Default ICO format
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarDemo />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
