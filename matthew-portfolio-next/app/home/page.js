import Image from "next/image";
import styles from "../../styles/page.module.css";
import Button from "@/components/Button";
import profile from "../../public/profile.jpeg"
export default function Home() {
  return (
    <div >
    <main className={styles.main}>
      <div className="flex justify-between mt-20">
        <div className="xl:w-1/3">
          <p className="text-lg">Matthew Coleman is a</p>
          <h1 className="text-4xl xl:text-7xl my-10 font-bold">Web designer and <span className="text-purple-300">developer<span className="text-6xl xl:text-8xl">.</span></span></h1>
          <p className="text-lg">based in Georgia and open to fulltime employment.</p>
          
          <div className="flex gap-x-4 mt-10">
            <Button link="/projects" text="Browse Projects" />
            <Button link="/about" text="About Me" />
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
