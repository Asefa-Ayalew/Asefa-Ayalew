import React from 'react'
import { projects } from '../data'

const Projects = () => {
  return (
    <div className='p-4'>
      <nav>Navbar</nav>
      <div>
        {
          projects.map()
        }
      </div>
    </div>
  )
}

export default Projects