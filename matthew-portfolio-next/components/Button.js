import React from "react";
import styles from './Button.module.css';
import Link from "next/link";

export default function Button( { text, link, color }) {
    return(
        <div className={styles.buttonContainer}>
            <Link className={styles.button} href={link}>{text} </Link>
        </div>
    )
}