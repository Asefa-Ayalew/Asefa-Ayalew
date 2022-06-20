import Link from 'next/link';
import React, { useState } from 'react'
import { string } from 'yup';

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');
  return (
    <div>
        <span>{activeItem}</span>
        <div>
            <Link href='/'></Link>
        </div>
    </div>
  )
}

export default Navbar