import React, { FunctionComponent } from 'react'
import { IProject } from '../type'

const ProjectCard:FunctionComponent<{
    project:IProject;
} = ({
    project:{
        name,ima
    }
}) => {
  return (
    <div>ProjectCard</div>
  )
}

export default ProjectCard