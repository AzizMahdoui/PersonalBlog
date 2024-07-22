import React from 'react'
import "../Navbar/index.css"
const Introduction = () => {
  return (
    <div className='flex flex-col gap-6 w-[65%]'> 
        <h1 className='text-5xl font-bold flex flex-row gap-4'>Hi there, I’m <p className='gradient-text'>Aziz</p>👋</h1>   
        <p className='w-[70%] text-start font-thin text-2xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className='flex flex-row gap-6 mt-4'>
            <a>LinkedIn</a>
            <a>Github</a>
            <a>Twitter</a>
        </div>
        
    </div>
  )
}

export default Introduction