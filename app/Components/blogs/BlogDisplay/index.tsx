import React from 'react'
import { Blog } from '@/app/libs/Schemas'
import "../../../Components/Header/Navbar/index.css"
import "./index.css"
import Attendance from '../../../../public/images/Western Man.png'
import Image from 'next/image'
import Link from 'next/link'
interface BlogDisplayProps {
    size: 'large' | 'medium' | 'small';
    title: string;
    description: string;
    link: string;
  }
const BlogDisplay = ({size}:BlogDisplayProps) => {
    const sizeClasses = {
        large: 'col-span-3',
        medium: 'col-span-2',
        small: 'col-span-1',
      };
  return (
    <div className={`rounded-lg gradient-blue-background shadow-md shadow-slate-600 overflow-hidden transform transition duration-300 hover:scale-105 ${sizeClasses[size]}`}>
    <Image src={Attendance} alt="Blog Post 1" className="w-[250px] rounded-full h-48 "/>
    <div className="p-6">
      <Link href={"home"}><h1 className="text-2xl underline font-bold mb-2">Blog Post Title 1</h1></Link>
      <p className="text-white mb-4 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link href="#" className="text-blue-500 font-semibold">Read more</Link>
    </div>
  </div>
    )
}

export default BlogDisplay