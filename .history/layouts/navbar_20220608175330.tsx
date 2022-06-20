import Link from 'next/link';
import React, { useState } from 'react'
import { string } from 'yup';

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');
  return (
    <div>
        <span className='font-bold text-green-400'>{activeItem}</span>
        <div className='text-red font-lg flex '>
            {activeItem!=='About' && (
                    <Link href='/'>
                <a>
                    <span onClick={()=>setActiveItem('About')}>
                        About
                    </span>
                </a>
            </Link>
                )}
            {activeItem!=='Projects' && (
                    <Link href='/projects'>
                <a>
                    <span onClick={()=>setActiveItem('Projects')}>
                        Projects
                    </span>
                </a>
            </Link>
                )}
            {activeItem!=='Resume' && (
                    <Link href='/resume'>
                <a>
                    <span onClick={()=>setActiveItem('Resume')}>
                        Resume
                    </span>
                </a>
            </Link>
                )}
            
        </div>
    </div>
  )
}

export default Navbar