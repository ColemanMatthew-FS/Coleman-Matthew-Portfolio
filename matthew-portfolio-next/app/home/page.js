import Image from "next/image";
import styles from "../../styles/page.module.css";
import Text_Block from "@/components/Text_Block";
import Button from "@/components/Button";
import profile from "../../public/profile.jpeg"
import Link from "next/link";
export default function Home() {
  return (
    <div >
    <main className={styles.main}>
      <div className="flex justify-between px-10 mt-20">
        <div className="xl:w-1/3">
          <p className="text-lg">Hello! I'm a,</p>
          <h1 className="text-2xl xl:text-7xl mt-10 mb-10 font-bold">Web designer and <span className="text-purple-300">developer<span className="text-2xl xl:text-8xl">.</span></span></h1>
          <p className="text-lg">I'm based in Georgia, and I'm open to fulltime employment.</p>
          
          <div className="flex gap-x-4 mt-10">
            <Button link="/projects" text="Browse Projects" />
            <Button link="/about" text="About" />
          </div>
        </div>
        <div className="hidden xl:flex w-4/12 relative justify-center p-5 border-solid border-2 rounded-full">
          <Image className="object-cover rounded-full overflow-hidden w-[32rem] h-[32rem]"
            src = {profile}
            alt = "Me!"
          />
        </div>
      </div>
    </main>
    </div>
  );
}
