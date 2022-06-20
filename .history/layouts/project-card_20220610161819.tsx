import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import { IProject } from '../type'

const ProjectCard:FunctionComponent<{
    project:IProject;
}> = ({
    project:{
        name,image_path,category,deployed_url,description,github_url,key_techs,
    },
}) => {
  return (
    <div>
    <Image src={image_path} alt={name} className='cursor-pointer' width={aut} height={500}/>
    <p>{name}</p>    
   </div>
  )
}

export default ProjectCard