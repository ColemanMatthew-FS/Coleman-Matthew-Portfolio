import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

let navCounter = 0;

let nav = [
  {
    id: navCounter ++,
    name: "Home",
    url: "/home"
  },
  {
    id: navCounter ++,
    name: "Projects",
    url: "/projects"
  },
  {
    id: navCounter ++,
    name: "Skills",
    url: "/skills"
  },
  {
    id: navCounter ++,
    name: "About",
    url: "/about"
  },
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar items={nav} />
        {children}
      </body>
    </html>
  );
}
