import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
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
    <Image src={image_path} alt={name} className='cursor-pointer' width="500" height={500}/>
    <p className='py-2 text-center'>{name}</p>   
    <div className="grid md:grid-cols-2">
        <div>
            <div>
                h2
            </div>
        <Image src={image_path} alt={name} width="500" height={500}/>
        <div>
        <a href={github_url}>
            <AiFillGithub /><span>Github</span>
        </a>
        <a href={deployed_url}>
            <AiFillProject /><span>Project</span>
        </a>
        </div>  
        </div>
    </div> 
   </div>
  )
}

export default ProjectCard