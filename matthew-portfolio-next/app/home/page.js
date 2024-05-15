import Image from "next/image";
import styles from "../../styles/page.module.css";
import Text_Block from "@/components/Text_Block";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Web designer and developer</h1>
      <p>I'm a web dev based in Georgia, and I'm open to fulltime employment.</p>
      <Image
        src = "/profile.jpeg"
        width={1920}
        height={2560}
        alt = "Me!"
      />
      <Link href="/projects">Browse projects.</Link>
      <Link href="/about">About (& contact!)</Link>
    </main>
  );
}
