import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'


const Nav = (props) => {
    console.log(props.navbar);
    const {name,path} = props.route
    return (
        <li className='ml-4'>
            {/* <BeakerIcon class="h-6 w-6 text-blue-500" /> */}
            <a href={path}>{ name}</a>
        </li>
    );
};

export default Nav;