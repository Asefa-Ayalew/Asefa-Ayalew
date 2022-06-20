import Image from 'next/image'
import React from 'react'

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
        <span>A</span>
      </div>
    </div>
    </>
  )
}

export default Sidebar