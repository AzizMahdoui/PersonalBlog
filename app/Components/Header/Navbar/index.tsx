"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Logo from "../Logo/index"
import "./index.css"
const Navbar = () => {
    const currentPath = usePathname();
  return (
    <div className='flex justify-between items-center py-10  px-20'>
        <Logo/>
            <nav className='flex  flex-row gap-10 font-light border-2  gradient-background border-red-950   px-16 py-6 rounded-full'>
            <Link
            href="/portfolio"
            className={`${currentPath === "/portfolio" ? "text-red-950 border-b-2  border-b-red-950" : ""} link hover:text-red-950`}
            >
            Portfolio
            </Link>       
            <Link
             className={`${currentPath === "/articles" ? "text-red-950 border-b-2 border-b-red-950" : ""} link hover:text-red-950`}
             href={"/articles"}>Articles</Link>
            <Link 
             className={`${currentPath === "/contact" ? "text-red-950 border-b-2 border-b-red-950" : ""} link hover:text-red-950`}
            href={"/contact"}>Contact</Link>
            <Link
            className={`${currentPath === "/home" ? "text-red-950 border-b-2 border-red-950" : ""} link hover:text-red-950`}
            href={"/home"}>Home</Link>
        </nav>
    </div>
  )
}

export default Navbar