import { Noto_Sans } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const noto = Noto_Sans({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Web Dev Portfolio",
  description: "Matthew Coleman's Portfolio",
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
      <body className={noto.className}>
        <Navbar items={nav} />
        {children}
      </body>
    </html>
  );
}
