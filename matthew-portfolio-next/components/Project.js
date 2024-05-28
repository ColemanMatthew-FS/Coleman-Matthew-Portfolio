import React from "react";
import styles from './Project.module.css'
import Image from "next/image";

export default function Project({image, title, text, href}) {
    return(
        <a href={href} className="w-full h-full md:w-[50vh] grow rounded-xl">
            <h2 className="pt-3 pb-3 text-2xl md:font-semibold">{title}</h2>
            <div className={styles.imageHolder}>
                <Image
                id={image.id}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                {...image}
                className="hidden md:block object-cover overflow-hidden rounded-xl"
                />
                <p className="p-3 hidden md:block">{text}</p>
            </div>
        </a>
    )
}