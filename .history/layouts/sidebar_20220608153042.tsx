import Image from 'next/image'
import React from 'react'
import {Button} from '@'

function Sidebar() {
  return (
    <>
    <Image 
    src='/images/celinedion.PNG'
    alt='ase'
    height={500}
    width={500} />
    <h3>
        <span>Asefa </span>
        Ayalew
    </h3>
    <p>Frontened web developer</p>
    <p>download resume</p>
    <div>
      <div>
        <span>Addis Ababa, Ethiopia</span>
        <p>asefa12a19@gmail.com</p>
        <p>+251961445484</p>
      </div>
      <Button>Email me</Button>
    </div>
    </>
  )
}

export default Sidebar