'use client'

import React from "react";
import styles from './Navbar.module.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar( {items} ) {
    // const navItems = items.map((item) => <Link href={item.url}>{item.name}</Link>)

    const navItems = items.map((item) => 
        usePathname() != item.url ? (<li key={item.id}><Link href={item.url}>{item.name}</Link></li>
        ):(<li key={item.id}><p className="text-xl text-purple-300">{item.name}</p></li>)
    )
    return(
        <div className="flex justify-between items-center h-full py-10 px-32 sticky top-0">
            <p className="text-xl">Matthew Coleman</p>
            <ul className="hidden md:flex gap-x-6 text-xl">
                { navItems }
            </ul>
        </div>
    )
}