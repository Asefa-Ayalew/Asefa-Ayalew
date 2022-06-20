import React from 'react'
import { services } from '../data'

function index() {
  console.log(services);
  
  return (
    <div>This is content</div>
  )
}

export default index
export const getServerSideProps = () =>