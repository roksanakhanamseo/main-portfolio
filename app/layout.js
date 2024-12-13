import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tanvir Portfolio",
  description: "This is a portfolio website",
};

export default function RootLayout({ children }) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-W5GHNE0GRZ");
  return (
    <html lang="en">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W5GHNE0GRZ"
      ></script>

      <body
        className={` overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased bg-[#111] text-[rgb(248,248,255)]`}
      >
        <Sidebar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
