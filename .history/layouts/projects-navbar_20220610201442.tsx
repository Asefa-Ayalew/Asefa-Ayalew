import React, { FunctionComponent } from 'react'
import { Category } from '../type'

const NavItem:FunctionComponent<{value:Category | "all"}>= (value) => {
    return (
         <li>{value}</li>
        )
  }

const ProjectsNavbar = () => {
  return (
    <div>
    <NavItem  />
    </div>
  )
}

export default ProjectsNavbar




