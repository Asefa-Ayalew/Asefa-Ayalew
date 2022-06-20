import React, { FunctionComponent } from 'react'
import { ISkill } from '../type'

const Bar:FunctionComponent<{data:ISkill}>= ({data:{Icon,}}) => {
  return (
    <div>Bar</div>
  )
}

export default Bar