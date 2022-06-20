import React from 'react'
import { projects } from '../data'
import ProjectCard from '../layouts/project-card'

const Projects = () => {
  return (
    <div className='p-4'>
      <nav>Navbar</nav>
      <div>
        {
          projects.map(project=>(
            <div>
              <ProjectCard project={p} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects