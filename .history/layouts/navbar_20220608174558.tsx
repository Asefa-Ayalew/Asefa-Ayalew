import Link from 'next/link';
import React, { useState } from 'react'
import { string } from 'yup';

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');
  return (
    <div>
        <span>{activeItem}</span>
        <div>
            {
                activeItem!=='About' && (
                    <Link href='/'>
                <a>
                    <span>
                        About
                    </span>
                </a>
            </Link>
                )
            }
            
        </div>
    </div>
  )
}

export default Navbar