import React from "react";
import styles from './Project.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Project({image, title, text}) {
    return(
        <div className={styles.card}>
            <h2 className="pt-3 pb-3 text-2xl font-semibold">{title}</h2>
            <div className={styles.imageHolder}>
                <Image
                {...image}
                className="object-cover overflow-hidden rounded-t-xl"
                />
                <p className="p-3">{text}</p>
            </div>
        </div>
    )
}