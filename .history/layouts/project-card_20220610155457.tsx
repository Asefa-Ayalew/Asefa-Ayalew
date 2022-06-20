import React, { FunctionComponent } from 'react'
import { IProject } from '../type'

const ProjectCard:FunctionComponent<{
    project:IProject;
} = ({
    project:{
        name,image_path
    }
}) => {
  return (
    <div>ProjectCard</div>
  )
}

export default ProjectCard