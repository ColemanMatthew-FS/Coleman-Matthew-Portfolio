'use client'

import React from "react";
import styles from './Navbar.module.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar( {items} ) {
    // const navItems = items.map((item) => <Link href={item.url}>{item.name}</Link>)

    const navItems = items.map((item) => 
        usePathname() != item.url ? (<li key={item.id}><Link href={item.url}>{item.name}</Link></li>
        ):(<li key={item.id}><p className={styles.paragraph}>{item.name}</p></li>)
    )
    return(
        <>
            <p>Matthew Coleman</p>
            <ul>
                { navItems }
            </ul>
        </>
    )
}