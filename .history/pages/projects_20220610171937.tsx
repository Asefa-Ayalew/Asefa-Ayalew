/* eslint-disable react/jsx-key */
import React from 'react'
import { projects } from '../data'
import ProjectCard from '../layouts/project-card'

const Projects = () => {
  return (
    <div className='p-4'>
      <nav>Navbar</nav>
      <div className='grid grid-cols-12 gap-4 my-3 relative'>
        {
          projects.map(project=>(
            <div className='col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dar'>
              <ProjectCard project={project} key={project.name} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects