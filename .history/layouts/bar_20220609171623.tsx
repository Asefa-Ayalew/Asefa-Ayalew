import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'

const Bar:FunctionComponent<{data:ISkill}>= ({data:{Icon,level,name}}) => {
  return (
    <div>
        div.px-4.py-1.flex-items-center.rounded-full.bg-gradient-to-r.from-green-400.to
    </div>
  )
}

export default Bar