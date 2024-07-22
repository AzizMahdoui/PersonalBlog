import React from 'react'
import Introduction from './Introduction'
import Image from 'next/image'
import Aziz from "../../../public/images/me.jpg"
const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-6 px-xl mt-10'> 
        <Introduction/>
        <Image src={Aziz}  width={350} className='rounded-full'></Image>
    </div>
  )
}

export default Header