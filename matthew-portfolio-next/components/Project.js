import React from "react";
import styles from './Project.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Project({image, title, text}) {
    return(
        <div>
            <h2>{title}</h2>
            <Image
            {...image}
            />
            <p>{text}</p>
        </div>
    )
}