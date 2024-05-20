import React from "react";
import styles from './Project.module.css'
import Image from "next/image";

export default function Project({image, title, text, href}) {
    return(
        // try to use tailwind for this (instead of the module), to improve readability
        <div className="h-full w-[50vh] grow rounded-xl">
            <h2 className="pt-3 pb-3 text-2xl font-semibold">{title}</h2>
            <div className={styles.imageHolder}>
                <a href={href}>
                    <Image
                    {...image}
                    className="object-cover overflow-hidden rounded-xl"
                    />
                </a>
                <p className="p-3">{text}</p>
            </div>
        </div>
    )
}