import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Products", path: "/products" },
  { id: 5, name: "Blog", path: "/blog" },
];

    return (
        <nav className='bg-teal-500 py-2'>
            <div onClick={() => setOpen(!open)} className="md:hidden">           
            <span>{

            open == true ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-black" />
            
            }</span>
            </div>
            <ul className={`md:flex absolute md:static duration-300 ${open ? 'top-6' : '-top-48'}`}>
                {
                routes.map(route => <Nav route={route} key={route.id}></Nav>)
         }   
            </ul>
        </nav>
    );
};

export default Navbar;