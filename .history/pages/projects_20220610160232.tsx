/* eslint-disable react/jsx-key */
import React from 'react'
import { projects } from '../data'
import ProjectCard from '../layouts/project-card'

const Projects = () => {
  return (
    <div className='p-4'>
      <nav>Navbar</nav>
      <div cla>
        {
          projects.map(project=>(
            <div>
              <ProjectCard project={project} key={project.name} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects