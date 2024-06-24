'use client'

import React from "react";
import styles from './Navbar.module.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar( {items} ) {

    const navItems = items.map((item) => 
        // Map through each link
        // If the link being mapped is not the link to the current page, produce an active link
        // If it is the current page, produce regular text
        // I used map instead of foreach, because I didn't want to mutate the {items} argument here
        usePathname() != item.url ? (<li key={item.id}><Link href={item.url} className="hover:text-purple-300 transition-colors">{item.name}</Link></li>
        ):(<li key={item.id}><p className="text-xl text-purple-300">{item.name}</p></li>)
    )
    return(
        <div className="flex md:justify-between justify-center h-full py-10 px-6 md:px-32 sticky top-0">
            <p className="hidden md:text-xl">Matthew Coleman</p>
            <ul className="flex gap-x-2 md:gap-x-6 text-xl">
                { navItems }
            </ul>
        </div>
    )
}