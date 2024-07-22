import React from 'react'
import Ecom from "../../../public/images/Ecom.jpg" 
import Chat from "../../../public/images/1000_F_343385294_xaxNRSubtKJ4cBdDeUHQPzA1lAuudZEQ.jpg"
import Attendance from "../../../public/images/Attendance.jpg"
import ProjectDisplay from './ProjectDisplay/ProjectDisplay'

const Projects = () => {
    const projects =  [{src:Ecom,title:"Ecommerce Platform",category:"Web development",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum."},
        {src:Chat,title:"Helpdesk Chatbot",category:"Web Development/Data Science",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum."},
        {src:Attendance,title:"Attendance System",category:"Web Development",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum."},
    ]
  return (
    <div className='flex flex-col px-xl mt-20'>
            <h1 className='font-bold text-5xl flex flex-row gap-4 mb-4'>Recent  <p className='gradient-text'>Projects</p></h1>
            <div className='flex flex-col gap-6'>
                    {projects.map((project)=>(
                        <ProjectDisplay title={project.title} src={project.src} description={project.description} category={project.category}/>
                    ))}
            </div>
            
    </div>
  )
}

export default Projects