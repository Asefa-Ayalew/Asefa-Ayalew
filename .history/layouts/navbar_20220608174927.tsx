import Link from 'next/link';
import React, { useState } from 'react'
import { string } from 'yup';

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');
  return (
    <div>
        <span className='font-bold text-gre'>{activeItem}</span>
        <div>
            {activeItem!=='About' && (
                    <Link href='/'>
                <a>
                    <span>
                        About
                    </span>
                </a>
            </Link>
                )}
            {activeItem!=='Projects' && (
                    <Link href='/projects'>
                <a>
                    <span>
                        About
                    </span>
                </a>
            </Link>
                )}
            {activeItem!=='Resume' && (
                    <Link href='/resume'>
                <a>
                    <span>
                        About
                    </span>
                </a>
            </Link>
                )}
            
        </div>
    </div>
  )
}

export default Navbar