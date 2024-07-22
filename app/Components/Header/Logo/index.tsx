import React from 'react'
import LogoPic from "../../../../public/images/Western Man.png"
import Image from 'next/image'
import "../Navbar/index.css"
const Logo = () => {
  return (
    <div className='flex px-8 py-3  justify-center items-center flex-row gap-4'>
            <Image className='rounded-full' src={LogoPic} width={50} height={50}></Image>
            <p className='font-semibold text-3xl  gradient-text'>Aziz's Personal Blog</p>
    </div>
  )
}

export default Logo