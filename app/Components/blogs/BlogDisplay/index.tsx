import React from 'react'
import { Blog } from '@/app/libs/Schemas'
import "../../../Components/Header/Navbar/index.css"
import "./index.css"
interface BlogDisplayProps {
    size: 'large' | 'medium' | 'small';
    image: string;
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
    <div className={`rounded-lg gradient-blue-background shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${sizeClasses[size]}`}>
    <img src="path-to-image1.jpg" alt="Blog Post 1" className="w-full h-48 object-cover"/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Blog Post Title 1</h1>
      <p className="text-gray-700 mb-4 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#" className="text-blue-500 font-semibold">Read more</a>
    </div>
  </div>
    )
}

export default BlogDisplay