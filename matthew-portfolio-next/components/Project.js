import React from "react";
import styles from './Project.module.css'
import Image from "next/image";

export default function Project({image, title, text, href}) {
    return(
        <a href={href} className="flex flex-row-reverse justify-end items-center gap-x-6 md:block w-full h-full md:w-[50vh] grow">
            <h2 className="pt-3 pb-3 md:text-2xl md:font-semibold">{title}</h2>
            <div className={styles.imageHolder}>
                <Image
                id={image.id}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className="md:block object-cover h-24 w-24 md:h-full md:w-full overflow-hidden rounded-r-xl md:rounded-xl max-w-fit"
                />
                <p className="p-3 hidden md:block">{text}</p>
            </div>
        </a>
    )
}