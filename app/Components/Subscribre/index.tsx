import React from 'react'
import "../../Components/Header/Navbar/index.css"
const Subscribe = () => {
  return (
    <div className='px-xl flex flex-row my-[50px] justify-between items-center'>
        <div className='flex flex-col'>
            <h2 className='text-4xl  font-bold'>Subscribe To My <h3 className='gradient-text '>Newsletters</h3></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>
        </div>
        <div className='flex flex-row'>
                <input placeholder='email' type='text' name='email'/>
                <button
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center  gradient-background rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                    >
                        {/* <Plus className="w-5 h-5 mr-2" /> */}
                        <span className="text-white font-bold">Subscribe</span>
                    </button>    
              </div>
        
        
    </div>
  )
}

export default Subscribe