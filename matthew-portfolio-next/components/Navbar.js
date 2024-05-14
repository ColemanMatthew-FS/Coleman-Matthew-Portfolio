'use client'

import React from "react";
import styles from './Navbar.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar( {items} ) {
    // const navItems = items.map((item) => <Link href={item.url}>{item.name}</Link>)

    const navItems = items.map((item) => 
        usePathname() != item.url ? (<Link href={item.url}>{item.name}</Link>
        ):(<p>{item.name}</p>)
    )

    console.log(usePathname())
    console.log(items)
    console.log(navItems)
    return(
        <>
            <ul>
                { navItems }
            </ul>
        </>
    )
}