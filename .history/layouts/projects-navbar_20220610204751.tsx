import React, { FunctionComponent } from 'react'
import { Category } from '../type'

const NavItem:FunctionComponent<{value:Category | "all"}>= ({value}) => {
    return (
         <li className='cursor-pointer hover:text-green capitalize'>{value}</li>
        )
  }

const ProjectsNavbar = (props) => {
  return (
    <div className='px-3 py-2 flex list-none space-x-3 overflow-x-auto'>
    <NavItem value='all' {/>
    <NavItem value='react' {/>
    <NavItem value='mongo' {/>
    <NavItem value='django' {/>
    <NavItem value='node' {/>
    </div>
  )
}

export default ProjectsNavbar




