import React from 'react'
import BlogDisplay from './BlogDisplay'
const Blogs = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
            <h2 className="text-3xl font-bold text-center mb-8">Recent Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogDisplay size='medium'/>
              <BlogDisplay size='small'/>
              <BlogDisplay size='small'/>
              <BlogDisplay size='medium'/>   
              <BlogDisplay size='large'/>   

            </div>
         
    </div>
  )
}

export default Blogs