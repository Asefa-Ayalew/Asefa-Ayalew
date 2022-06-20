import React, { FunctionComponent } from 'react'
import { IService } from '../type'

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon,about,title}}) => {
  const createMarkup = ()=>{
    return {
      
    }
  }
  return (
    <div className='flex items-center p-2 space-x-4'>
        <Icon className='w-12 h-12 text-green-400'/>
        <div>
            <h4  className='font-bold'>{title}</h4>
            <p dangerouslySetInnerHTML={}>{about}</p>
        </div>
    </div>
  )
}

export default ServiceCard