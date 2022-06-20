import React, { FunctionComponent } from 'react'
import { Category } from '../type'

const NavItem:FunctionComponent<{
    value:Category | "all",handlerFilterCategory:Function
}>= 
({value, handlerFilterCategory}) => {
    return (
         <li  onClick={()=>handlerFilterCategory(value)}>{value}</li>
        )
  }

const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function}> = (props) => {
  return (
    <div className='px-3 py-2 flex list-none space-x-3 overflow-x-auto'>
    <NavItem value='all' {...props}/>
    <NavItem value='react' {...props}/>
    <NavItem value='mongo' {...props}/>
    <NavItem value='django' {...props}/>
    <NavItem value='node' {...props}/>
    </div>
  )
}

export default ProjectsNavbar




