import Image from "next/image";
import styles from "../../styles/page.module.css";
import Text_Block from "@/components/Text_Block";
import Button from "@/components/Button";
import profile from "../../public/profile.jpeg"
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex justify-between">
        <div className="xl:w-1/3">
          <p className="text-lg">Matthew Coleman</p>
          <h1 className="text-7xl mt-10 mb-10">Web designer and developer</h1>
          <p className="text-lg">I'm a web dev based in Georgia, and I'm open to fulltime employment.</p>
          
          <div className="flex gap-x-4 mt-10">
            <Button link="/projects" text="Browse Projects" />
            <Button link="/about" text="About" />
          </div>
        </div>
        <div className="hidden xl:flex w-4/12 relative justify-center">
          <Image className="object-cover rounded-full overflow-hidden w-[32rem] h-[32rem]"
            src = {profile}
            alt = "Me!"
          />
        </div>
      </div>
    </main>
  );
}
