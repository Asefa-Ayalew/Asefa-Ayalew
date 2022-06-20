import React from 'react'

const resume = () => {
  return (
    <div className='p-4'>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Computer Engineering</h5>
            <p className='font-semibold'>College of Engineering and technology (2015-2019)</p>
            <p className='my-3'>
              I am graduated in Electrical and computer Engineering from Wachemo university in 2019.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Junior Software Developer</h5>
            <p className='font-semibold'>Perago Information System (2022)</p>
            <p className='my-3'>
              I am developing my programming skill now and for the future .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume