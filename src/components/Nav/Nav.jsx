import React from 'react';



const Nav = (props) => {
    
    const {name,path} = props.route
    return (
        <li className='hover:text-white ml-1 hover:font-semibold bg-teal-500 px-4 '>
            {/* <BeakerIcon class="h-6 w-6 text-blue-500" /> */}
            <a href={path}>{ name}</a>
        </li>
    );
};

export default Nav;