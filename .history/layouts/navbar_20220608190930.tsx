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
            <Link href={route}>
        <a>
            <span onClick={()=>setActiveItem(name)}>
                {name}
            </span>
        </a>
    </Link>
        ):null  
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
    <div className='flex justify-between px-5 py-3 my-3'>
        <span className='text-xl font-bold text-green-400 border-b-4 border-green-400'>{activeItem}</span>
        <div className='flex space-x-3 text-lg text-blue'>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'/>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'/>
            
        </div>
    </div>
  )
}

export default Navbar