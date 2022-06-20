import React, { FunctionComponent } from 'react'
import { IService } from '../type'

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon,about,title}}) => {
  return (
    <div>
        <Icon />
        <div>
            <h4></h4>
        </div>
    </div>
  )
}

export default ServiceCard