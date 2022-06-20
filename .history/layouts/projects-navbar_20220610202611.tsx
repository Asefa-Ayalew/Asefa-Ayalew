import React, { FunctionComponent } from 'react'
import { Category } from '../type'

const NavItem:FunctionComponent<{value:Category | "all"}>= ({value}) => {
    return (
         <li>{value}</li>
        )
  }

const ProjectsNavbar = () => {
  return (
    <div className='px-3 py-2 flex list-none space-x-3 overf'>
    <NavItem value='all' />
    <NavItem value='react' />
    <NavItem value='mongo' />
    <NavItem value='django' />
    <NavItem value='node' />
    </div>
  )
}

export default ProjectsNavbar




