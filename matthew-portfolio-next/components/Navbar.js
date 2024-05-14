import React from "react";
import styles from './Navbar.css'
import Link from "next/link";

export default function Navbar( {items} ) {
    const navItems = items.map((item) => <Link href={item.url}>{item.name}</Link>)
    return(
        <>
            <ul>
                { navItems }
            </ul>
        </>
    )
}