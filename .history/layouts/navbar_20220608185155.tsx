import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { string } from 'yup';

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem, name, route,setActiveItem})=>{
    return(
        activeItem!==name? (
            <Link href='/'>
        <a>
            <span onClick={()=>setActiveItem('About')}>
                About
            </span>
        </a>
    </Link>
        ):  
    )
}

function Navbar() {
    const [activeItem, setActiveItem] = useState<string>('');


    const {pathname} = useRouter();
    useEffect(()=>{
        if(pathname==='/') setActiveItem('About')
        if(pathname==='/projects') setActiveItem('Projects')
        if(pathname==='/resume') setActiveItem('Resume')
    },[])
    return (
    <div>
        <span className='font-bold text-green-400'>{activeItem}</span>
        <div className='flex space-x-3 text-white font-lg'>
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