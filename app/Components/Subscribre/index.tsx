import React from 'react'
import "../../Components/Header/Navbar/index.css"
import { Plus } from 'lucide-react'
const Subscribe = () => {
  return (
    <div className='px-xl flex flex-row my-[50px] justify-between items-center'>
        <div className='flex flex-col'>
            <h2 className='text-4xl  font-bold'>Subscribe To My <h3 className='gradient-text '>Newsletters</h3></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at</p>
        </div>
           <div className='flex flex-row items-center justify-arround relative   rounded-full bg-bluegray-500 '>
                <input placeholder='Enter Your Email' className='bg-transparent  outline-none  border-1 font-thin text-lg mr-[150px] p-4 placeholder:text-white' type='text' name='email'/>
                  <button
                        type="submit"
                        className=" absolute flex flex-row items-center hover:bg-purple-400 right-2 px-5 mb-4 py-2.5  sm:mt-6 text-sm font-medium text-center  gradient-background rounded-full focus:ring-4 focus:ring-purple-200  "
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        <span className="text-white font-bold">Subscribe</span>
                    </button>    
              </div>
        
        
    </div>
  )
}

export default Subscribe