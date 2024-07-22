import Image from 'next/image';
import React from 'react'
import "../../Header/Navbar/index.css"
interface Project{
    title:string;
    src:string;
    description:string;
    category:string;
}
const ProjectDisplay = ({title,src,description,category}:Project) => {
  return (
    <div className='flex flex-row gap-6 mt-6 p-6 bg-bluegray-700 rounded-2xl'>
        <Image src={src} className='rounded-full cover w-[200px] h-[150px]' width={250}></Image>
        <div className='flex-col flex gap-5'>
            <div className='flex flex-row gap-6 items-center'>
                <h3 className='text-2xl'>{title}</h3>
                <p className='gradient-background px-4 py-2 rounded-full font-extralight ml-[45px] '>{category}</p>
            </div>
            <p className='font-thin text-start'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectDisplay